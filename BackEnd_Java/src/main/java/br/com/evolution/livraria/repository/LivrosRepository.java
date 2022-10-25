package br.com.evolution.livraria.repository;

import br.com.evolution.livraria.models.LivrosModels;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LivrosRepository extends CrudRepository<LivrosModels, Long> {

    List<LivrosModels> findByTitulo(String titulo);

}
