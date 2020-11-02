package com.equipoanalisis.SistemaVentasCatalogo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="pedido")
public class Pedido {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_pedido")
	private Long id_pedido;
	
	@Column(name = "id_usuario")
	private Long id_usuario;
	
	@Column(name = "id_tienda")
	private Long id_tienda;
	
	@Column(name = "id_estado")
	private Long id_estado;
	
	@Column(name = "esdomicilio")
	private Long esdomicilio;
	
	@Column(name = "listo")
	private Long listo;
	
	@Column(name = "entregado")
	private Long entregado;

	public Long getId_pedido() {
		return id_pedido;
	}

	public void setId_pedido(Long id_pedido) {
		this.id_pedido = id_pedido;
	}

	public Long getId_usuario() {
		return id_usuario;
	}

	public void setId_usuario(Long id_usuario) {
		this.id_usuario = id_usuario;
	}

	public Long getId_tienda() {
		return id_tienda;
	}

	public void setId_tienda(Long id_tienda) {
		this.id_tienda = id_tienda;
	}

	public Long getId_estado() {
		return id_estado;
	}

	public void setId_estado(Long id_estado) {
		this.id_estado = id_estado;
	}

	public Long getEsdomicilio() {
		return esdomicilio;
	}

	public void setEsdomicilio(Long esdomicilio) {
		this.esdomicilio = esdomicilio;
	}

	public Long getListo() {
		return listo;
	}

	public void setListo(Long listo) {
		this.listo = listo;
	}

	public Long getEntregado() {
		return entregado;
	}

	public void setEntregado(Long entregado) {
		this.entregado = entregado;
	}
	
	
	
	
	
}
