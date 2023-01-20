package br.com.evolution.livraria.controllers;


import br.com.evolution.livraria.dtos.LivrosDTO;
import br.com.evolution.livraria.dtos.LivrosRs;
import br.com.evolution.livraria.models.AutoresModels;
import br.com.evolution.livraria.models.LivrosModels;
import br.com.evolution.livraria.repository.AutoresRepository;
import br.com.evolution.livraria.repository.LivrosRepository;
import br.com.evolution.livraria.services.LivrosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.text.DateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Controller
@CrossOrigin(origins = "*")
@RequestMapping("api/livros")
public class LivrosControllers {

    @Autowired
    private final LivrosService livrosService;
    private final AutoresRepository autoresRepository;
    private final LivrosRepository livrosRepository;

    public LivrosControllers(LivrosRepository livrosRepository, AutoresRepository autoresRepository, LivrosService livrosService, AutoresRepository autoresRepository1, LivrosRepository livrosRepository1) {

        this.livrosService = livrosService;
        this.autoresRepository = autoresRepository;
        this.livrosRepository = livrosRepository;
    }

    @GetMapping("/{id}")
    public @ResponseBody LivrosDTO findById(@PathVariable Long id) {

        return livrosService.findById(id);
    }

    @GetMapping("/teste")
    public ResponseEntity<Page<LivrosDTO>> findAll(
            @RequestParam(value = "page", defaultValue = "0") Integer page,
            @RequestParam(value = "size", defaultValue = "10") Integer size
    ){
        PageRequest pageRequest = PageRequest.of(page, size);
        Page<LivrosDTO> list = livrosService.findAll(pageRequest);
        //System.out.println(livrosService);
        return ResponseEntity.ok(list);
    }


    @GetMapping
    public @ResponseBody List<LivrosRs> getAll(){

        return livrosRepository.findAll().stream().map(LivrosRs::converter).collect(Collectors.toList());
    }

    @PostMapping
    public ResponseEntity saveAll(@RequestBody LivrosDTO livrosDTO){
        livrosService.create(livrosDTO);

        return ResponseEntity.status(HttpStatus.CREATED).body("OK");
    }

    @PutMapping("/{id}")
    public ResponseEntity update(@PathVariable("id") Long id, @RequestBody LivrosDTO livrosDTO) throws Exception{
        livrosService.update(id, livrosDTO);
        return new ResponseEntity(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable("id") Long id){
        livrosService.delete(id);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
