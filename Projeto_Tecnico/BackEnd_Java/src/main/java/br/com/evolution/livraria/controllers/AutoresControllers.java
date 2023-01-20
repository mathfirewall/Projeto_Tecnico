package br.com.evolution.livraria.controllers;

import br.com.evolution.livraria.dtos.AutoresDTO;
import br.com.evolution.livraria.models.AutoresModels;
import br.com.evolution.livraria.repository.AutoresRepository;
import br.com.evolution.livraria.services.AutoresService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.text.DateFormat;
import java.util.Date;

@Controller
@CrossOrigin(origins = "*")
@RequestMapping("/api/autores")
public class AutoresControllers {

    private final AutoresRepository autoresRepository;
    private final AutoresService autoresService;

    public AutoresControllers(AutoresRepository autoresRepository, AutoresService autoresService) {
        this.autoresRepository = autoresRepository;
        this.autoresService = autoresService;
    }
    // consulta por id
    @GetMapping("/{id}")
    public @ResponseBody AutoresDTO findById(@PathVariable Long id) {

        return autoresService.findById(id);
    }

    // Consulta Paginada de todos os Autores com os Seus Livros
    @GetMapping
    public ResponseEntity<Page<AutoresDTO>> findAll(
            @RequestParam(value = "page", defaultValue = "0") Integer page,
            @RequestParam(value = "size", defaultValue = "10") Integer size
    ){
        PageRequest pageRequest = PageRequest.of(page, size);
        Page<AutoresDTO> list = autoresService.findAll(pageRequest);
        //System.out.println(livrosService);
        return ResponseEntity.ok(list);
    }
    // cadastro de Autores
    @PostMapping
    public ResponseEntity<AutoresModels> saveAll(@RequestBody AutoresDTO autoresDTO){

        autoresService.create(autoresDTO);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<AutoresDTO> update(@PathVariable("id") Long id, @RequestBody AutoresDTO autoresDTO) throws Exception{
        autoresService.updateAll(id, autoresDTO);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable("id") Long id){
        autoresService.delete(id);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
