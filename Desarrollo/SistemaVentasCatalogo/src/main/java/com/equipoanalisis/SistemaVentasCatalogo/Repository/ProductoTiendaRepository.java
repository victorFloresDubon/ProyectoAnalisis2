package com.equipoanalisis.SistemaVentasCatalogo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.equipoanalisis.SistemaVentasCatalogo.entity.ProductoTienda;

@Repository
public interface ProductoTiendaRepository extends JpaRepository<ProductoTienda, Integer>{

	
}
