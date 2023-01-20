package br.com.evolution.livraria.services;

import br.com.evolution.livraria.dtos.AutoresDTO;
import br.com.evolution.livraria.dtos.LivrosDTO;
import br.com.evolution.livraria.models.LivrosModels;
import br.com.evolution.livraria.repository.AutoresRepository;
import br.com.evolution.livraria.repository.LivrosRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.text.DateFormat;
import java.util.Date;
import java.util.Optional;

@Service
public class LivrosService {

    @Autowired
    private final LivrosRepository livrosRepository;
    private final AutoresRepository autoresRepository;

    public LivrosService(LivrosRepository livrosRepository,
                         AutoresRepository autoresRepository) {
        this.livrosRepository = livrosRepository;
        this.autoresRepository = autoresRepository;
    }
    @Transactional
    public LivrosDTO findById(Long id){
        LivrosModels entity = livrosRepository.findById(id).get();
        LivrosDTO dto = new LivrosDTO(entity);
        return dto;
    }

    @Transactional
    public Page<LivrosDTO> findAll(PageRequest pageRequest){
        Page<LivrosModels> list = livrosRepository.findAll(pageRequest);
        return list.map(x -> new LivrosDTO(x));
    }

    @Transactional
    public ResponseEntity create(LivrosDTO livros){
        Date agora = new Date();
        String dateToStr = DateFormat.getDateTimeInstance(
                DateFormat.LONG, DateFormat.SHORT).format(agora);

        var lModels = new LivrosModels();
        var autorID = autoresRepository.findById(livros.getId_autor()).get();
        lModels.setAutor(autorID);
        lModels.setTitulo(livros.getTitulo());
        lModels.setPaginas(livros.getPaginas());
        lModels.setPreco(livros.getPreco());
        lModels.setData_cadastro(dateToStr);

        livrosRepository.save(lModels);
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @Transactional
    public ResponseEntity update(Long id, LivrosDTO livros){
        var lvID = livrosRepository.findById(id);
        var autrID = autoresRepository.findById(livros.getId_autor()).get();

        var lModels = lvID.get();
        lModels.setAutor(autrID);
        lModels.setTitulo(livros.getTitulo());
        lModels.setPaginas(livros.getPaginas());
        lModels.setPreco(livros.getPreco());
        livrosRepository.save(lModels);
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @Transactional
    public ResponseEntity delete(Long id){
        livrosRepository.deleteById(id);
        return new ResponseEntity(HttpStatus.OK);
    }
}
