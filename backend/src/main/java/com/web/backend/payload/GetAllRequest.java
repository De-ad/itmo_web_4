package com.web.backend.payload;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GetAllRequest {

    @NotBlank
    private String token;
}
