package app.ventas.back.dao.api;

import org.springframework.data.repository.CrudRepository;

import app.ventas.back.model.usuario;

public interface UsuarioDaoAPI extends CrudRepository<usuario, Long> {

}
