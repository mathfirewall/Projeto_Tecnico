package br.com.evolution.livraria.controllers;


import br.com.evolution.livraria.dtos.LivrosRs;
import br.com.evolution.livraria.models.LivrosModels;
import br.com.evolution.livraria.repository.LivrosRepository;
import org.springframework.beans.factory.annotation.Autowired;
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
@RequestMapping("api/livros")
public class LivrosControllers {

    @Autowired
    private final LivrosRepository livrosRepository;

    public LivrosControllers(LivrosRepository livrosRepository) {
        this.livrosRepository = livrosRepository;
    }

    @GetMapping("/{id}")
    public ResponseEntity <LivrosModels> findById(@PathVariable Long id) {

        return livrosRepository.findById(id)
                .map(respostas -> ResponseEntity.ok().body(respostas))
                .orElse(ResponseEntity.notFound().build());
    }


    @GetMapping
    public @ResponseBody List<LivrosModels> getAll(){
        return (List<LivrosModels>) livrosRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<LivrosModels> saveAll(@RequestBody LivrosModels livrosModels){
        Date agora = new Date();
        String dateToStr = DateFormat.getDateTimeInstance(DateFormat.LONG,
                DateFormat.SHORT).format(agora);

        livrosModels.setData_cadastro(dateToStr);
        return ResponseEntity.status(HttpStatus.CREATED).
                body(livrosRepository.save(livrosModels));
    }

    @PutMapping("/{id}")
    public ResponseEntity update(@PathVariable("id") Long id, @RequestBody LivrosModels livrosModels) throws Exception{
        var p = livrosRepository.findById(id);

        Date agora = new Date();
        String dateToStr = DateFormat.getDateTimeInstance(DateFormat.LONG,
                DateFormat.SHORT).format(agora);

        if (p.isPresent()){
            var pessoaSave = p.get();
            pessoaSave.setTitulo(livrosModels.getTitulo());
            pessoaSave.setPaginas(livrosModels.getPaginas());
            pessoaSave.setPreco(livrosModels.getPreco());
            pessoaSave.setData_cadastro(dateToStr);
            livrosRepository.save(pessoaSave);

        }else {
            throw new Exception("Nada Encontrado");
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body("OK");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable("id") Long id){
        livrosRepository.deleteById(id);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
