package br.com.evolution.livraria.services;

import br.com.evolution.livraria.dtos.LivrosDTO;
import br.com.evolution.livraria.models.LivrosModels;
import br.com.evolution.livraria.repository.LivrosRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Service
public class LivrosService {

    @Autowired
    private final LivrosRepository livrosRepository;

    public LivrosService(LivrosRepository livrosRepository) {
        this.livrosRepository = livrosRepository;
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
}
