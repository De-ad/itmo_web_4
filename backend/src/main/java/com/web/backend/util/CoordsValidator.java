package com.web.backend.util;

import org.springframework.stereotype.Component;

@Component
public class CoordsValidator {

    public boolean validate(Double x, Double y, Double r){
        return validateSquare(x, y, r) || validateCircle(x, y, r) || validateTriangle(x, y, r);
    }

    private boolean validateSquare(Double x, Double y, Double r){
            return (x <= 0) && (x >= -r) && (y >= 0) && (y <= r);
    }

    private boolean validateCircle(Double x, Double y, Double r){
            return (x <= 0) && (y <= 0) && (Math.pow(r/2, 2) >= Math.pow(y, 2) + Math.pow(x, 2));
    }

    private boolean validateTriangle(Double x, Double y, Double r){
            return (x >= 0) && (y >= 0) && (r/2 >= x + y);
    }

}
