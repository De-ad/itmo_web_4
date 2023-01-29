package com.web.backend.util;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "audit")
public class AuditEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    private String executionTime;

    private String methodName;


    public AuditEntity(String executionTime, String methodName){
        this.executionTime =  executionTime;
        this.methodName = methodName;
    }

    public AuditEntity() {

    }
}
