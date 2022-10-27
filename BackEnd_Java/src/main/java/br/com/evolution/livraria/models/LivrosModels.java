package br.com.evolution.livraria.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "livros")
public class LivrosModels {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonProperty("id")
    @Column(name = "id")
    private Long id;


    @ManyToOne
    @JoinColumn(name = "autor_id")
    private AutoresModels autor;

    @Column(name = "titulo", length = 155, nullable = false)
    private String titulo;

    @Column(name = "paginas", length = 200, nullable = false)
    private int paginas;

    @Column(name = "preco", length = 300, nullable = false)
    private Double preco;

    @Column(name = "data_cadastro", nullable = false)
    private String data_cadastro;


}
