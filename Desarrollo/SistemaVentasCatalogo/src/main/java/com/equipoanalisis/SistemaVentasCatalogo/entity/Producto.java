package com.equipoanalisis.SistemaVentasCatalogo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="producto")
public class Producto {

	@Id
	@Column(name = "id_producto")
	private Long id_producto;

	@Column(name = "id_tienda")
	private Long id_tienda;
	
	@Column(name = "nombre")
	private String nombre;
	
	@Column(name = "precio")
	private float precio;

	@Column(name = "foto")
	private String foto;

	
	public Long getId_producto() {
		return id_producto;
	}

	public void setId_producto(Long id_producto) {
		this.id_producto = id_producto;
	}

	public Long getId_tienda() {
		return id_tienda;
	}

	public void setId_tienda(Long id_tienda) {
		this.id_tienda = id_tienda;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public float getPrecio() {
		return precio;
	}

	public void setPrecio(float precio) {
		this.precio = precio;
	}

	public String getFoto() {
		return foto;
	}

	public void setFoto(String foto) {
		this.foto = foto;
	}
	
	
}
