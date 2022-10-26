package br.com.evolution.livraria.controllers;

import br.com.evolution.livraria.models.AutorModels;
import br.com.evolution.livraria.models.LivrosModels;
import br.com.evolution.livraria.repository.AutorRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.text.DateFormat;
import java.util.Date;
import java.util.List;

@Controller
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/autor")
public class AutorController {

    private final AutorRepository autorRepository;

    public AutorController(AutorRepository autorRepository){

        this.autorRepository = autorRepository;
    }

    @GetMapping
    public @ResponseBody List<AutorModels> getAll(){
        return autorRepository.findAll();
    }


    @PostMapping
    public ResponseEntity<AutorModels> saveAll(@RequestBody AutorModels autorModels){
        Date agora = new Date();
        String dateToStr = DateFormat.getDateTimeInstance(DateFormat.LONG,
                DateFormat.SHORT).format(agora);

        autorModels.setData_cadastro(dateToStr);
        autorModels.setData_update(dateToStr);
        return ResponseEntity.status(HttpStatus.CREATED).
                body(autorRepository.save(autorModels));
    }


}
