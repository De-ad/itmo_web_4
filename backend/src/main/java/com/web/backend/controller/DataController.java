package com.web.backend.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.web.backend.entity.CoordinateRowEntity;
import com.web.backend.entity.UserEntity;
import com.web.backend.payload.DataRequest;
import com.web.backend.payload.MessageResponse;
import com.web.backend.repository.CoordinateRowRepo;
import com.web.backend.repository.UserRepo;
import com.web.backend.security.JwtUtils;
import com.web.backend.util.CoordsValidator;
import com.web.backend.util.JsonParser;
import jakarta.validation.Valid;
import jakarta.validation.ValidationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/data")
public class DataController {

    @Autowired
    JwtUtils jwtUtils;

    @Autowired
    CoordinateRowRepo coordinateRowRepo;

    @Autowired
    UserRepo userRepo;

    @Autowired
    JsonParser jsonParser;

    @Autowired
    CoordsValidator coordsValidator;

    @PostMapping("/add")
    public ResponseEntity checkData(@Valid @RequestBody DataRequest dataRequest){
        try{
            if(jwtUtils.validateJwtToken(dataRequest.getJwtToken())){

                CoordinateRowEntity coordinateRowEntity = new CoordinateRowEntity();
                coordinateRowEntity.setX(dataRequest.getX());
                coordinateRowEntity.setY(dataRequest.getY());
                coordinateRowEntity.setR(dataRequest.getR());

//                validation
                coordinateRowEntity.setResult(
                coordsValidator.validate(coordinateRowEntity.getX(), coordinateRowEntity.getY(),
                        coordinateRowEntity.getR()));

                UserEntity userEntity = userRepo.findByUsername(jwtUtils.extractUsername(dataRequest.getJwtToken()));

//                save to DB
                coordinateRowEntity.setUserEntity(userEntity);
                coordinateRowRepo.save(coordinateRowEntity);

//                extract all coordinate rows to send it to front

                List<CoordinateRowEntity> coordinateRowEntityList = coordinateRowRepo.findAllByUserEntity(userEntity);
//                convert to json
//                write into response entity
                return ResponseEntity.ok(jsonParser.parseToJson(coordinateRowEntityList));
            }
            else{return ResponseEntity.badRequest().body(new MessageResponse("Error: jwt validation failed"));}
        }
        catch (ValidationException e){
            return ResponseEntity.badRequest().body(new MessageResponse("Error: invalid data"));
        }
        catch (AuthenticationException e){
            return ResponseEntity.badRequest().body(new MessageResponse("Error: token is not valid"));
        } catch (JsonProcessingException e) {
            return ResponseEntity.ok(new MessageResponse("json!!!!!!!!!"));
        }

    }


}
