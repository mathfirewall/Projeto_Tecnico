package br.com.evolution.livraria.services;


import br.com.evolution.livraria.dtos.AutoresDTO;
import br.com.evolution.livraria.models.AutoresModels;
import br.com.evolution.livraria.repository.AutoresRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.text.DateFormat;
import java.util.Date;

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

    @Transactional
    public String create(AutoresDTO autoresDTO){
        Date agora = new Date();
        String dateToStr = DateFormat.getDateTimeInstance(
                DateFormat.LONG, DateFormat.SHORT).format(agora);
        var autm = new AutoresModels();
        autm.setNome(autoresDTO.getNome());
        autm.setOrigem(autoresDTO.getOrigem());
        autm.setData_cadastro(dateToStr);
        autoresRepository.save(autm);

        return "OK";
    }

    @Transactional
    public AutoresDTO updateAll(Long id, AutoresDTO autores){
        var entity = autoresRepository.findById(id);
        Date agora = new Date();
        String dateToStr = DateFormat.getDateTimeInstance(DateFormat.LONG,
                DateFormat.SHORT).format(agora);
        var save = entity.get();
        save.setNome(autores.getNome());
        save.setOrigem(autores.getOrigem());
        //save.setData_cadastro(dateToStr);
        autoresRepository.save(save);
        return autores;

    }

    @Transactional
    public String delete(Long id){
        autoresRepository.deleteById(id);
        return "OK";

    }


}
