package com.example.delparque.repository;

import com.example.delparque.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsuariosRepository extends JpaRepository<Usuario, String> {
    Optional<Usuario> findByEmail(String email);
}
