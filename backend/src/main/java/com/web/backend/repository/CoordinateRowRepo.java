package com.web.backend.repository;

import com.web.backend.entity.CoordinateRowEntity;
import com.web.backend.entity.UserEntity;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CoordinateRowRepo extends JpaRepository<CoordinateRowEntity, Long> {

    List<CoordinateRowEntity> findAllByUserEntity(UserEntity userEntity);

    void deleteAllByUserEntity(UserEntity userEntity);
}
