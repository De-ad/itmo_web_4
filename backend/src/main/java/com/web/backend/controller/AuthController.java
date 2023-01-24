package com.web.backend.controller;


import com.web.backend.entity.UserEntity;
import com.web.backend.payload.JwtResponse;
import com.web.backend.payload.LoginRequest;
import com.web.backend.payload.MessageResponse;
import com.web.backend.payload.SignupRequest;
import com.web.backend.repository.UserRepo;
import com.web.backend.security.JwtUtils;
import com.web.backend.security.UserDetailsImpl;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/auth")
public class AuthController{

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private PasswordEncoder encoder;

    // better through constructor
    @Autowired
    private JwtUtils jwtUtils;

    @PostMapping("/signin")
    // type paramater
    public ResponseEntity authenticateUser(@Valid @RequestBody LoginRequest loginRequest){

        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

            // no need to do this
            SecurityContextHolder.getContext().setAuthentication(authentication);
            String jwt = jwtUtils.generateJwtToken(authentication);

            UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
            return ResponseEntity.ok(new JwtResponse(jwt, userDetails.getUsername()));
        }
        catch (AuthenticationException e){
            return ResponseEntity.ok(new MessageResponse("Error: authentication error. User doesn't exist"));
        }

    }

    @PostMapping("/signup")
    public ResponseEntity registerUser(@Valid @RequestBody SignupRequest signUpRequest){
        // no guarantee that user with specified in request username woun't be
        // inserted after this check but before userRepo.save(userEntity)
        if (userRepo.existsByUsername(signUpRequest.getUsername())) {
            return ResponseEntity
                    .ok("Error: Username is already taken!");
        }
        UserEntity userEntity = new UserEntity();
        UserDetailsImpl user = new UserDetailsImpl(userEntity);
        user.setUsername(signUpRequest.getUsername());
        user.setPassword(encoder.encode(signUpRequest.getPassword()));
        userRepo.save(userEntity);
        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }



}
