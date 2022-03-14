package com.example.delparque.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Condominio {
    private String id;
    private Usuario usuario;
    private Direccion direccion;
    private Trabajador trabajador;
}