package com.equipoanalisis.SistemaVentasCatalogo.Repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.equipoanalisis.SistemaVentasCatalogo.entity.PedidoDetalle;

public interface PedidoDetalleRepository extends JpaRepository<PedidoDetalle, Integer>{

	@Query("SELECT pd FROM PedidoDetalle pd WHERE pd.id_linea = ?1 AND pd.id_pedido = ?2")
	PedidoDetalle findByPedidoDetalle(int id_linea, int id_pedido);
	
}
