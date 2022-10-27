package br.com.evolution.livraria.dtos;

import br.com.evolution.livraria.models.LivrosModels;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LivrosDTO {

    private Long    id;
    private Long    id_autor;
    private String  titulo;
    private String  nome_autor;
    private int     paginas;
    private Double  preco;
    private String  data_cadastro;

    public LivrosDTO(Long id,
                     Long id_autor,
                     String titulo,
                     String nome_autor,
                     int paginas, Double preco,
                     String data_cadastro) {
        this.id = id;
        this.id_autor = id_autor;
        this.titulo = titulo;
        this.nome_autor = nome_autor;
        this.paginas = paginas;
        this.preco = preco;
        this.data_cadastro = data_cadastro;
    }

    public LivrosDTO(LivrosModels livrosModels){

        id = livrosModels.getId();
        id_autor = livrosModels.getAutor().getId();
        titulo = livrosModels.getTitulo();
        nome_autor = livrosModels.getAutor().getNome();
        paginas = livrosModels.getPaginas();
        preco = livrosModels.getPreco();
        data_cadastro = livrosModels.getData_cadastro();

    }
}
