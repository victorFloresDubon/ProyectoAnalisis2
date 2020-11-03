package com.equipoanalisis.SistemaVentasCatalogo.Repository;


import org.springframework.data.jpa.repository.JpaRepository;
import com.equipoanalisis.SistemaVentasCatalogo.entity.PedidoDetalle;

public interface PedidoDetalleRepository extends JpaRepository<PedidoDetalle, Integer>{
	
}
