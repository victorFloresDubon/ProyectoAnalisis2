package app.ventas.back.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import app.ventas.back.commons.GenericServiceImpl;
import app.ventas.back.dao.api.UsuarioDaoAPI;
import app.ventas.back.model.usuario;
import app.ventas.back.service.api.UsuarioServiceAPI;

@Service
public class UsuarioServiceImpl extends GenericServiceImpl<usuario, Long> implements UsuarioServiceAPI {

	@Autowired
	private UsuarioDaoAPI usuarioDaoAPI;
	
	@Override
	public CrudRepository<usuario, Long> getDao() {
		return usuarioDaoAPI;
	}

}
