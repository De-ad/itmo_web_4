package com.web.backend.controller;

import com.web.backend.payload.LoginRequest;
import com.web.backend.payload.MessageResponse;
import com.web.backend.payload.SignupRequest;
import com.web.backend.service.AuthService;
import com.web.backend.util.Audit;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/auth")
public class AuthController{


    private final AuthService authService;

    @Autowired
    public AuthController(AuthService authService) {
        this.authService = authService;
    }


    @PostMapping("/signin")
    public ResponseEntity<Object> authenticateUser(@Valid @RequestBody LoginRequest loginRequest){
        try {
            return ResponseEntity.ok(authService.login(loginRequest));
        }
        catch (AuthenticationException e){
            return ResponseEntity.badRequest().body(new MessageResponse("Error: authentication error. User doesn't exist"));
        }

    }

    @PostMapping("/signup")
    @Audit
    public ResponseEntity<Object> registerUser(@Valid @RequestBody SignupRequest signUpRequest){
        try {
            return ResponseEntity.ok(authService.register(signUpRequest));
        }
        catch (Exception e){
            return ResponseEntity.badRequest().body(new MessageResponse(e.getMessage()));
        }

    }


}
