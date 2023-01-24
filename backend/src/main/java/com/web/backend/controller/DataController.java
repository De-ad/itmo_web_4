package com.web.backend.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.web.backend.entity.CoordinateRowEntity;
import com.web.backend.entity.UserEntity;
import com.web.backend.payload.DataRequest;
import com.web.backend.payload.DeleteAllRequest;
import com.web.backend.payload.MessageResponse;
import com.web.backend.repository.CoordinateRowRepo;
import com.web.backend.repository.UserRepo;
import com.web.backend.security.JwtUtils;
import com.web.backend.util.CoordsValidator;
import com.web.backend.util.JsonParser;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import jakarta.validation.ValidationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/data")
@Transactional
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

//    убрать логику из контроллеров

    @PostMapping("/add")
    public ResponseEntity checkData(@Valid @RequestBody DataRequest dataRequest){
        try{
            System.out.println(jwtUtils.validateJwtToken(dataRequest.getToken()));
            // it is already checked in filter, no need to validate second time
            if(jwtUtils.validateJwtToken(dataRequest.getToken())){

                CoordinateRowEntity coordinateRowEntity = new CoordinateRowEntity();
                coordinateRowEntity.setX(dataRequest.getX());
                coordinateRowEntity.setY(dataRequest.getY());
                coordinateRowEntity.setR(dataRequest.getR());

//                validation
                coordinateRowEntity.setResult(
                coordsValidator.validate(coordinateRowEntity.getX(), coordinateRowEntity.getY(),
                        coordinateRowEntity.getR()));

                UserEntity userEntity = userRepo.findByUsername(jwtUtils.extractUsername(dataRequest.getToken()));

//                save to DB
                coordinateRowEntity.setUserEntity(userEntity);
                coordinateRowRepo.save(coordinateRowEntity);

//                extract all coordinate rows to send it to front

                List<CoordinateRowEntity> coordinateRowEntityList = coordinateRowRepo.findAllByUserEntity(userEntity);
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
            return ResponseEntity.ok(new MessageResponse("json!!!!!!!!! exception"));
        }

    }

    @PostMapping("/delete_all")
    public ResponseEntity deleteAll(@Valid @RequestBody DeleteAllRequest deleteAllRequest){
        try {
            if (jwtUtils.validateJwtToken(deleteAllRequest.getJwtToken())){

                UserEntity userEntity =  userRepo.findByUsername(jwtUtils.extractUsername(deleteAllRequest.getJwtToken()));
                coordinateRowRepo.deleteAllByUserEntity(userEntity);
                return ResponseEntity.ok(new MessageResponse("Successfully deleted all user's data"));
            }
            return ResponseEntity.badRequest().body(new MessageResponse("Jwt token is invalid"));

        }
        catch (ValidationException e){
            return ResponseEntity.badRequest().body(new MessageResponse("Data is invalid"));
        }
        catch (Exception e){
            System.out.println(e.getMessage());
            return ResponseEntity.badRequest().body(new MessageResponse("Unknown exception inside DataController delete" +
                    "all. Need to check..."));
        }

    }


}
