package com.example.delparque.controllers;

import com.example.delparque.dto.Trabajador;
import com.example.delparque.service.TrabajadoresService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/trabajadores")
public class TrabajadoresController {

    private final TrabajadoresService trabajadoresService;

    TrabajadoresController(TrabajadoresService trabajadoresService) {
        this.trabajadoresService = trabajadoresService;
    }

    @GetMapping()
    public List<Trabajador> findAll() {
        return trabajadoresService.findAll();
    }

    @GetMapping("{id}")
    public Trabajador findById(@PathVariable String id) {
        return trabajadoresService.findById(id);
    }

    @PostMapping()
    public Trabajador save(@RequestBody Trabajador trabajador) {
        return trabajadoresService.save(trabajador);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable String id) {
        trabajadoresService.delete(id);
    }

}
