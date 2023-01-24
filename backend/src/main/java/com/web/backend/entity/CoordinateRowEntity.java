package com.web.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.io.Serializable;


@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "coordinates_row")
@JsonIgnoreProperties(value = { "userEntity", "id" })
public class CoordinateRowEntity implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Double x;
    private Double y;
    private Double r;
    private Boolean result;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserEntity userEntity;

}
