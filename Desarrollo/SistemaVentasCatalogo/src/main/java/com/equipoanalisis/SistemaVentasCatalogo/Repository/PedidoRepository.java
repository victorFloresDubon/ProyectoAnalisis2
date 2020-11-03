package com.equipoanalisis.SistemaVentasCatalogo.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.equipoanalisis.SistemaVentasCatalogo.entity.Pedido;

@Repository
public interface PedidoRepository  extends JpaRepository<Pedido, Integer>{

	@Query("SELECT ped FROM Pedido ped WHERE ped.id_usuario = ?1")
	List<Pedido> pedidosPorCliente(int id_usuario);

	@Query("SELECT ped FROM Pedido ped WHERE ped.id_usuario_repartidor = ?1")
	List<Pedido> pedidosPorRepartidor(int id_usuario_repartidor);

	
}
