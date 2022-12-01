package br.com.evolution.livraria.repository;

import br.com.evolution.livraria.models.LivrosModels;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LivrosRepository extends JpaRepository<LivrosModels, Long> {

    @Query(value = "SELECT obj FROM LivrosModels obj", nativeQuery = true)
    List<LivrosModels> busAll();
}
