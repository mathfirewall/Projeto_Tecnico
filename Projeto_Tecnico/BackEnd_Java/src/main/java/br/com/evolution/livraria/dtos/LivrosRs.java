package br.com.evolution.livraria.dtos;

import br.com.evolution.livraria.models.LivrosModels;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LivrosRs {

    private Long    id;
    private Long    id_autor;
    private String  titulo;
    private String  nome_autor;
    private int     paginas;
    private Double  preco;
    private String  data_cadastro;

    public static LivrosRs converter(LivrosModels livrosModels){
        var livros = new LivrosRs();
        livros.setId(livrosModels.getId());
        livros.setId_autor(livrosModels.getAutor().getId());
        livros.setTitulo(livrosModels.getTitulo());
        livros.setNome_autor(livrosModels.getAutor().getNome());
        livros.setPaginas(livrosModels.getPaginas());
        livros.setPreco(livrosModels.getPreco());
        livros.setData_cadastro(livrosModels.getData_cadastro());

        return livros;

    }
}
