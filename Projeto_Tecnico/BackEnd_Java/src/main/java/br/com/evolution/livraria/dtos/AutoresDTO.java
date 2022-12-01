package br.com.evolution.livraria.dtos;


import br.com.evolution.livraria.models.AutoresModels;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@Setter
public class AutoresDTO {

    private Long id;
    private String nome;
    private String origem;
    private String data_cadastro;
    private List<LivrosDTO> livros = new ArrayList();

    public AutoresDTO(){

    }

    public AutoresDTO(Long id, String nome, String origem, String data_cadastro, List<LivrosDTO> livros) {
        this.id = id;
        this.nome = nome;
        this.origem = origem;
        this.data_cadastro = data_cadastro;
        this.livros = livros;
    }

    public AutoresDTO(AutoresModels autoresModels){
        id = autoresModels.getId();
        nome = autoresModels.getNome();
        origem = autoresModels.getOrigem();
        data_cadastro = autoresModels.getData_cadastro();
        livros = autoresModels.getLivros().stream().map(x -> new LivrosDTO(x)).collect(Collectors.toList());

    }

}
