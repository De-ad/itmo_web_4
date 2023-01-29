package com.web.backend.util;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuditEntityRepository extends CrudRepository<AuditEntity, Long> {

}
