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
	private int id_pedido;
	
	@Column(name = "id_usuario")
	private int id_usuario;
	
	@Column(name = "id_tienda")
	private int id_tienda;
	
	@Column(name = "esdomicilio")
	private int esdomicilio;
	
	@Column(name = "listo")
	private int listo;
	
	@Column(name = "entregado")
	private int entregado;

	@Column(name = "id_usuario_repartidor")
	private int id_usuario_repartidor;

	public int getId_pedido() {
		return id_pedido;
	}

	public void setId_pedido(int id_pedido) {
		this.id_pedido = id_pedido;
	}

	public int getId_usuario() {
		return id_usuario;
	}

	public void setId_usuario(int id_usuario) {
		this.id_usuario = id_usuario;
	}

	public int getId_tienda() {
		return id_tienda;
	}

	public void setId_tienda(int id_tienda) {
		this.id_tienda = id_tienda;
	}

	public int getEsdomicilio() {
		return esdomicilio;
	}

	public void setEsdomicilio(int esdomicilio) {
		this.esdomicilio = esdomicilio;
	}

	public int getListo() {
		return listo;
	}

	public void setListo(int listo) {
		this.listo = listo;
	}

	public int getEntregado() {
		return entregado;
	}

	public void setEntregado(int entregado) {
		this.entregado = entregado;
	}

	public int getId_usuario_repartidor() {
		return id_usuario_repartidor;
	}

	public void setId_usuario_repartidor(int id_usuario_repartidor) {
		this.id_usuario_repartidor = id_usuario_repartidor;
	}
	

	
}
