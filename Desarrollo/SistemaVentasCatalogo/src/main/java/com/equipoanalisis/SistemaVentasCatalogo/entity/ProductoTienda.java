package com.equipoanalisis.SistemaVentasCatalogo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import javax.persistence.Id;


@Entity
@Table(name="producto_tienda")
public class ProductoTienda {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_producto_tienda")
	private Long id_producto_tienda;
	
	@Column(name = "id_producto")
	private int id_producto;
	
	@Column(name = "id_tienda")
	private int id_tienda;

	public Long getId_producto_tienda() {
		return id_producto_tienda;
	}

	public void setId_producto_tienda(Long id_producto_tienda) {
		this.id_producto_tienda = id_producto_tienda;
	}

	public int getId_producto() {
		return id_producto;
	}

	public void setId_producto(int id_producto) {
		this.id_producto = id_producto;
	}

	public int getId_tienda() {
		return id_tienda;
	}

	public void setId_tienda(int id_tienda) {
		this.id_tienda = id_tienda;
	}

	
	
}
