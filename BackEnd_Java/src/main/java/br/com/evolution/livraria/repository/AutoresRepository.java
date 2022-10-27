package br.com.evolution.livraria.repository;

import br.com.evolution.livraria.models.AutoresModels;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AutoresRepository extends JpaRepository<AutoresModels, Long> {

}
