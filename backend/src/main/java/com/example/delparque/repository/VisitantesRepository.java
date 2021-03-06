package com.example.delparque.repository;

import com.example.delparque.model.Visitante;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VisitantesRepository extends JpaRepository<Visitante, String> {
}
