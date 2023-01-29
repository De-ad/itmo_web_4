package com.web.backend.service;

import com.web.backend.entity.UserEntity;
import com.web.backend.payload.JwtResponse;
import com.web.backend.payload.LoginRequest;
import com.web.backend.payload.MessageResponse;
import com.web.backend.payload.SignupRequest;
import com.web.backend.repository.UserRepo;
import com.web.backend.security.JwtUtils;
import com.web.backend.security.UserDetailsImpl;
import com.web.backend.util.Audit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;


@Service
public class AuthService {

    private final AuthenticationManager authenticationManager;

    private final JwtUtils jwtUtils;

    private final UserRepo userRepo;

    private final PasswordEncoder encoder;

    @Autowired
    public AuthService(AuthenticationManager authenticationManager, JwtUtils jwtUtils, UserRepo userRepo, PasswordEncoder encoder) {
        this.authenticationManager = authenticationManager;
        this.jwtUtils = jwtUtils;
        this.userRepo = userRepo;
        this.encoder = encoder;
    }

    public JwtResponse login(@RequestBody LoginRequest loginRequest){
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
        // no need to do this
//        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        return new JwtResponse(jwt, userDetails.getUsername());
    }

    public MessageResponse register(SignupRequest signUpRequest){
        UserEntity userEntity = new UserEntity();
        UserDetailsImpl user = new UserDetailsImpl(userEntity);
        user.setUsername(signUpRequest.getUsername());
        user.setPassword(encoder.encode(signUpRequest.getPassword()));
        try {
            userRepo.save(userEntity);
            return new MessageResponse("User registered successfully!");
        }
        catch(DataIntegrityViolationException e){
            return new MessageResponse("User already exist");
        }

    }


}
