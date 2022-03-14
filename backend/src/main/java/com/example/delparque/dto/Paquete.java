package com.example.delparque.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Paquete {
    private String id;
    private String emisor;
    private String receptor;
    private String caseta;
    private boolean entregado;
    private Condominio condominio;
}