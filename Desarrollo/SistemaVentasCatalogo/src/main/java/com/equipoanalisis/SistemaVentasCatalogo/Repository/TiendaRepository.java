package com.equipoanalisis.SistemaVentasCatalogo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.equipoanalisis.SistemaVentasCatalogo.entity.Tienda;

@Repository
public interface TiendaRepository  extends JpaRepository<Tienda, Integer>{

}
