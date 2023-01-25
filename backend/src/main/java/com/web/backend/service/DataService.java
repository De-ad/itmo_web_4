package com.web.backend.service;

import com.web.backend.entity.CoordinateRowEntity;
import com.web.backend.entity.UserEntity;
import com.web.backend.payload.DataRequest;
import com.web.backend.payload.DeleteAllRequest;
import com.web.backend.payload.GetAllRequest;
import com.web.backend.payload.MessageResponse;
import com.web.backend.repository.CoordinateRowRepo;
import com.web.backend.repository.UserRepo;
import com.web.backend.security.JwtUtils;
import com.web.backend.util.CoordsValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;



@Service
public class DataService {

    final
    JwtUtils jwtUtils;

    final
    CoordinateRowRepo coordinateRowRepo;

    final
    UserRepo userRepo;

    final
    CoordsValidator coordsValidator;

    public DataService(JwtUtils jwtUtils, CoordinateRowRepo coordinateRowRepo, UserRepo userRepo, CoordsValidator coordsValidator) {
        this.jwtUtils = jwtUtils;
        this.coordinateRowRepo = coordinateRowRepo;
        this.userRepo = userRepo;
        this.coordsValidator = coordsValidator;
    }


    public List<CoordinateRowEntity> addRowAndGetAll(@RequestBody DataRequest dataRequest){
        // it is already checked in filter, no need to validate second time +
        CoordinateRowEntity coordinateRowEntity = new CoordinateRowEntity();
        coordinateRowEntity.setX(dataRequest.getX());
        coordinateRowEntity.setY(dataRequest.getY());
        coordinateRowEntity.setR(dataRequest.getR());
//      validation
        coordinateRowEntity.setResult(
                coordsValidator.validate(coordinateRowEntity.getX(), coordinateRowEntity.getY(),
                        coordinateRowEntity.getR()));
        UserEntity userEntity = userRepo.findByUsername(jwtUtils.extractUsername(dataRequest.getToken()));
//                save to DB
        coordinateRowEntity.setUserEntity(userEntity);
        coordinateRowRepo.save(coordinateRowEntity);
//                extract all coordinate rows to send it to front

        List<CoordinateRowEntity> coordinateRowEntityList = coordinateRowRepo.findAllByUserEntity(userEntity);
        return coordinateRowEntityList;
    }



    public MessageResponse deleteAll(@RequestBody DeleteAllRequest deleteAllRequest ){
        UserEntity userEntity =  userRepo.findByUsername(jwtUtils.extractUsername(deleteAllRequest.getJwtToken()));
        coordinateRowRepo.deleteAllByUserEntity(userEntity);
        return new MessageResponse("Successfully deleted all user's data");
    }

    public List<CoordinateRowEntity> getAll(@RequestBody GetAllRequest getAllRequest){
        UserEntity userEntity = userRepo.findByUsername(jwtUtils.extractUsername(getAllRequest.getJwtToken()));
        List<CoordinateRowEntity> coordinateRowEntityList = coordinateRowRepo.findAllByUserEntity(userEntity);
        return coordinateRowEntityList;
    }


}
