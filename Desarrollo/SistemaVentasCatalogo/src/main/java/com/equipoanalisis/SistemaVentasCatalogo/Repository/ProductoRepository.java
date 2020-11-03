package com.equipoanalisis.SistemaVentasCatalogo.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.equipoanalisis.SistemaVentasCatalogo.entity.Producto;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Integer>{

	@Query("SELECT pro FROM Producto pro WHERE pro.id_tienda = ?1")
	List<Producto> productosPorTienda(int id_tienda);


}
