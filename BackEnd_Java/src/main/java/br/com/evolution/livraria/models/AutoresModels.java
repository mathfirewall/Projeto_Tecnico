package br.com.evolution.livraria.models;


import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Data
@Table(name = "autores")
public class AutoresModels {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonProperty("id")
    @Column(name = "id")
    private Long id;

    @OneToMany(mappedBy = "autor")
    private List<LivrosModels> livros = new ArrayList<>();

    @Column(name = "nome", length = 155, nullable = false)
    private String nome;

    @Column(name = "origem", length = 200, nullable = false)
    private String origem;

    @Column(name = "data_cadastro", nullable = false)
    private String data_cadastro;
}
