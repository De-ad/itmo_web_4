package com.web.backend.controller;

import com.web.backend.payload.DataRequest;
import com.web.backend.payload.DeleteAllRequest;
import com.web.backend.payload.MessageResponse;
import com.web.backend.service.DataService;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import jakarta.validation.ValidationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/data")
@Transactional
public class DataController {

    @Autowired
    DataService dataService;

//    убрать логику из контроллеров +

    @PostMapping("/add")
    public ResponseEntity<Object> checkData(@Valid @RequestBody DataRequest dataRequest){
        try{
            return ResponseEntity.ok(dataService.addRowAndGetAll(dataRequest));
        }
        catch (ValidationException e){
            return ResponseEntity.badRequest().body(new MessageResponse("Error: invalid data"));
        }
        catch (AuthenticationException e){
            return ResponseEntity.badRequest().body(new MessageResponse("Error: token is not valid"));
        }
    }
//
    @PostMapping("/delete_all")
    public ResponseEntity<Object> deleteAll(@Valid @RequestBody DeleteAllRequest deleteAllRequest){
        try {
           return ResponseEntity.ok(dataService.deleteAll(deleteAllRequest));
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
