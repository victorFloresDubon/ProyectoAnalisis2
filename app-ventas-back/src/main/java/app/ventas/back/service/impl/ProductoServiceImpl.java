package app.ventas.back.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import app.ventas.back.commons.GenericServiceImpl;
import app.ventas.back.dao.api.ProductoDaoAPI;
import app.ventas.back.model.producto;
import app.ventas.back.service.api.ProductoServiceAPI;

@Service
public class ProductoServiceImpl extends GenericServiceImpl<producto, Long> implements ProductoServiceAPI {

	@Autowired
	private ProductoDaoAPI productoDaoAPI;
	
	@Override
	public CrudRepository<producto, Long> getDao() {
		return productoDaoAPI;
	}

}
