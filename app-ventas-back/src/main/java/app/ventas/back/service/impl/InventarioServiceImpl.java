package app.ventas.back.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import app.ventas.back.commons.GenericServiceImpl;
import app.ventas.back.dao.api.InventarioDaoAPI;
import app.ventas.back.model.inventario;
import app.ventas.back.service.api.InventarioServiceAPI;

@Service
public class InventarioServiceImpl extends GenericServiceImpl<inventario, Long> implements InventarioServiceAPI {

	@Autowired
	private InventarioDaoAPI inventarioDaoAPI;
	
	@Override
	public CrudRepository<inventario, Long> getDao() {
		return inventarioDaoAPI;
	}

}
