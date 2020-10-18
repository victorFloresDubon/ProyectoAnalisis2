package app.ventas.back.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import app.ventas.back.commons.GenericServiceImpl;
import app.ventas.back.dao.api.TiendaDaoAPI;
import app.ventas.back.model.tienda;
import app.ventas.back.service.api.TiendaServiceAPI;

@Service
public class TiendaServiceImpl extends GenericServiceImpl<tienda, Long> implements TiendaServiceAPI {

	@Autowired
	private TiendaDaoAPI tiendaDaoAPI;
	
	@Override
	public CrudRepository<tienda, Long> getDao() {
		return tiendaDaoAPI;
	}

}
