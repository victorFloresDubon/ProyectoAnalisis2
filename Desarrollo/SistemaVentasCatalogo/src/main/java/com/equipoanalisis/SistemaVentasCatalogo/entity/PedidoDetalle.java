package com.equipoanalisis.SistemaVentasCatalogo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;


@Entity
@IdClass(PedidoDetallePK.class)
@Table(name="pedido_detalle")
public class PedidoDetalle {

	@Id
	@Column(name = "id_linea")
	private int id_linea;
	
	@Id
	@Column(name = "id_pedido")
	private int id_pedido;

	@Column(name = "id_producto")
	private Long id_producto;

	@Column(name = "cantidad")
	private Long cantidad;

	@Column(name = "total")
	private Long total;

	@Column(name = "observacion")
	private Long observacion;

	public int getId_linea() {
		return id_linea;
	}

	public void setId_linea(int id_linea) {
		this.id_linea = id_linea;
	}

	public int getId_pedido() {
		return id_pedido;
	}

	public void setId_pedido(int id_pedido) {
		this.id_pedido = id_pedido;
	}

	public Long getId_producto() {
		return id_producto;
	}

	public void setId_producto(Long id_producto) {
		this.id_producto = id_producto;
	}

	public Long getCantidad() {
		return cantidad;
	}

	public void setCantidad(Long cantidad) {
		this.cantidad = cantidad;
	}

	public Long getTotal() {
		return total;
	}

	public void setTotal(Long total) {
		this.total = total;
	}

	public Long getObservacion() {
		return observacion;
	}

	public void setObservacion(Long observacion) {
		this.observacion = observacion;
	}

	
	
	
}
