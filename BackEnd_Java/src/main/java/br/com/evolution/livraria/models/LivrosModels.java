package br.com.evolution.livraria.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Data
@Table(name = "livros")
public class LivrosModels {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonProperty("id")
    @Column(name = "id")
    private Long id;


    @Column(name = "titulo", length = 155, nullable = false)
    private String titulo;

    @Column(name = "paginas", length = 200, nullable = false)
    private int paginas;

    @Column(name = "preco", length = 300, nullable = false)
    private Double preco;

    @Column(name = "data_cadastro", nullable = false)
    private String data_cadastro;


}
