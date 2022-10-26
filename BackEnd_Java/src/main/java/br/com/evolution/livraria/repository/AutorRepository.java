package br.com.evolution.livraria.repository;

import br.com.evolution.livraria.models.AutorModels;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AutorRepository extends JpaRepository<AutorModels, Long> {
}
