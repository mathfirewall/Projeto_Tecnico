package br.com.evolution.livraria.models;


import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Entity
@Data
@Table(name = "autores")
public class AutorModels {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonProperty("id")
    @Column(name = "id")
    private Long id;

    @Column(name = "nome", length = 155, nullable = false)
    private String nome;

    @Column(name = "email", length = 200, nullable = false)
    private String email;

    @Column(name = "origem", length = 300, nullable = false)
    private String origem;

    @Column(name = "data_cadastro", nullable = false)
    private String data_cadastro;

    @Column(name = "data_update")
    private String data_update;

}
