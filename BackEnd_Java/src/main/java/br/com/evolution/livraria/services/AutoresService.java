package br.com.evolution.livraria.services;


import br.com.evolution.livraria.dtos.AutoresDTO;
import br.com.evolution.livraria.dtos.LivrosDTO;
import br.com.evolution.livraria.models.AutoresModels;
import br.com.evolution.livraria.models.LivrosModels;
import br.com.evolution.livraria.repository.AutoresRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Service
public class AutoresService {
    @Autowired
    private AutoresRepository autoresRepository;


    @Transactional
    public AutoresDTO findById(Long id){
        AutoresModels entity = autoresRepository.findById(id).get();
        AutoresDTO dto = new AutoresDTO(entity);
        return dto;
    }
    @Transactional
    public Page<AutoresDTO> findAll(PageRequest pageRequest){
        Page<AutoresModels> list = autoresRepository.findAll(pageRequest);
        return list.map(x -> new AutoresDTO(x));
    }
}
