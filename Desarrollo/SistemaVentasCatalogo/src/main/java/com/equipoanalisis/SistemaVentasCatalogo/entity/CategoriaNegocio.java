package com.equipoanalisis.SistemaVentasCatalogo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="categoria_negocio")
public class CategoriaNegocio {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_categoria")
	private int id_categoria;
	
	@Column(name = "des_categoria")
	private String des_categoria;

	public int getId_categoria() {
		return id_categoria;
	}

	public void setId_categoria(int id_categoria) {
		this.id_categoria = id_categoria;
	}

	public String getDes_categoria() {
		return des_categoria;
	}

	public void setDes_categoria(String des_categoria) {
		this.des_categoria = des_categoria;
	}

	

}
