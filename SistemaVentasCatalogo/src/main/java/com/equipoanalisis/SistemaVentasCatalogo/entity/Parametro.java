package com.equipoanalisis.SistemaVentasCatalogo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="parametro")
public class Parametro {

	@Id
	@Column(name = "id_parametro_general")
	private Long id_parametro_general;
	
	@Column(name = "nombre_aplicacion")
	private String nombre_aplicacion;


	@Column(name = "cuota_fija")
	private float cuota_fija;

	@Column(name = "monto_entrega")
	private float monto_entrega;

	public Long getId_parametro_general() {
		return id_parametro_general;
	}

	public void setId_parametro_general(Long id_parametro_general) {
		this.id_parametro_general = id_parametro_general;
	}

	public String getNombre_aplicacion() {
		return nombre_aplicacion;
	}

	public void setNombre_aplicacion(String nombre_aplicacion) {
		this.nombre_aplicacion = nombre_aplicacion;
	}

	public float getCuota_fija() {
		return cuota_fija;
	}

	public void setCuota_fija(float cuota_fija) {
		this.cuota_fija = cuota_fija;
	}

	public float getMonto_entrega() {
		return monto_entrega;
	}

	public void setMonto_entrega(float monto_entrega) {
		this.monto_entrega = monto_entrega;
	}

	
	
}
