package com.equipoanalisis.SistemaVentasCatalogo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.equipoanalisis.SistemaVentasCatalogo.entity.CategoriaNegocio;

@Repository
public interface CategoriaNegocioRepository extends JpaRepository<CategoriaNegocio, Integer>{

}
