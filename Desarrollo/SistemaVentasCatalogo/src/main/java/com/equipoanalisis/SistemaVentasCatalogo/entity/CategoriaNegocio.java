package com.equipoanalisis.SistemaVentasCatalogo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="categoria_negocio")
public class CategoriaNegocio {

	@Id
	@Column(name = "id_categoria")
	private Long IdCategoria;
	
	@Column(name = "des_categoria")
	private String DescripcionCategoria;

	public Long getIdCategoria() {
		return IdCategoria;
	}

	public void setIdCategoria(Long idCategoria) {
		IdCategoria = idCategoria;
	}

	public String getDescripcionCategoria() {
		return DescripcionCategoria;
	}

	public void setDescripcionCategoria(String descripcionCategoria) {
		DescripcionCategoria = descripcionCategoria;
	}
	
	

}
