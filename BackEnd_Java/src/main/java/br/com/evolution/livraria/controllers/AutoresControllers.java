package br.com.evolution.livraria.controllers;

import br.com.evolution.livraria.models.AutoresModels;
import br.com.evolution.livraria.models.LivrosModels;
import br.com.evolution.livraria.repository.AutoresRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.text.DateFormat;
import java.util.Date;

@Controller
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/autores")
public class AutoresControllers {

    private final AutoresRepository autoresRepository;

    public AutoresControllers(AutoresRepository autoresRepository) {
        this.autoresRepository = autoresRepository;
    }


    @PostMapping
    public ResponseEntity<AutoresModels> saveAll(@RequestBody AutoresModels autoresModels){
        Date agora = new Date();
        String dateToStr = DateFormat.getDateTimeInstance(DateFormat.LONG,
                DateFormat.SHORT).format(agora);

        autoresModels.setData_cadastro(dateToStr);
        return ResponseEntity.status(HttpStatus.CREATED).
                body(autoresRepository.save(autoresModels));
    }
}
