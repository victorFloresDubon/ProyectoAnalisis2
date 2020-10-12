package com.equipoanalisis.SistemaVentasCatalogo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="menu")
public class Menu {

	@Id
	@Column(name = "id_menu")
	private Long IdMenu;
	
	@Column(name = "descripcion")
	private String descripcionMenu;
	
	@Column(name = "id_menu_padre")
	private String IdMenuPrincipal;
	
	@Column(name = "url")
	private String url;

	public Long getIdMenu() {
		return IdMenu;
	}

	public void setIdMenu(Long idMenu) {
		IdMenu = idMenu;
	}

	public String getDescripcionMenu() {
		return descripcionMenu;
	}

	public void setDescripcionMenu(String descripcionMenu) {
		this.descripcionMenu = descripcionMenu;
	}

	public String getIdMenuPrincipal() {
		return IdMenuPrincipal;
	}

	public void setIdMenuPrincipal(String idMenuPrincipal) {
		IdMenuPrincipal = idMenuPrincipal;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}
	
	

}
