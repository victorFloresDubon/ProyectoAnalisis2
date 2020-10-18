package app.ventas.back.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import app.ventas.back.commons.GenericServiceImpl;
import app.ventas.back.dao.api.CategoriaNegocioDaoAPI;
import app.ventas.back.model.categoria_negocio;
import app.ventas.back.service.api.CategoriaNegocioServiceAPI;

@Service
public class CategoriaNegocioServiceImpl extends GenericServiceImpl<categoria_negocio, Long> implements CategoriaNegocioServiceAPI {

	@Autowired
	private CategoriaNegocioDaoAPI categoria_negocioDaoAPI;
	
	@Override
	public CrudRepository<categoria_negocio, Long> getDao() {
		return categoria_negocioDaoAPI;
	}

}
