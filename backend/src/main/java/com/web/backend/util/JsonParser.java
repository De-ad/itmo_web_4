package com.web.backend.util;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.web.backend.entity.CoordinateRowEntity;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class JsonParser {

    public String parseToJson(List<CoordinateRowEntity> list) throws JsonProcessingException {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            objectMapper.enable(SerializationFeature.INDENT_OUTPUT);
            String arrayToJson = objectMapper.writeValueAsString(list);
            return arrayToJson;
        }
        catch (JsonProcessingException e){
            return e.getMessage();
        }
    }
}
