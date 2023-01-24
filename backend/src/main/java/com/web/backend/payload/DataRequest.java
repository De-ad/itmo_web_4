package com.web.backend.payload;

import jakarta.validation.constraints.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DataRequest {
    @NotNull
    @Max(3)
    @Min(-3)
    Double x;

    @NotNull
    @Max(3)
    @Min(-3)
    Double y;

    @Positive
    @NotNull
    Double r;

    @NotBlank
    String jwtToken;


}
