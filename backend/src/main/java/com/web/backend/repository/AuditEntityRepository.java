package com.web.backend.repository;

import com.web.backend.entity.AuditEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuditEntityRepository extends JpaRepository<AuditEntity, Long> {

}
