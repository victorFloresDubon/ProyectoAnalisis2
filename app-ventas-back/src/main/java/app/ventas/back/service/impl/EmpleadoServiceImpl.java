package app.ventas.back.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import app.ventas.back.commons.GenericServiceImpl;
import app.ventas.back.dao.api.EmpleadoDaoAPI;
import app.ventas.back.model.empleado;
import app.ventas.back.service.api.EmpleadoServiceAPI;

@Service
public class EmpleadoServiceImpl extends GenericServiceImpl<empleado, Long> implements EmpleadoServiceAPI {

	@Autowired
	private EmpleadoDaoAPI empleadoDaoAPI;
	
	@Override
	public CrudRepository<empleado, Long> getDao() {
		return empleadoDaoAPI;
	}

}
