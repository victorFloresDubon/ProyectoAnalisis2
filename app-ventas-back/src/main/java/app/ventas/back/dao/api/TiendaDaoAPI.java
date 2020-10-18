package app.ventas.back.dao.api;

import org.springframework.data.repository.CrudRepository;

import app.ventas.back.model.tienda;

public interface TiendaDaoAPI extends CrudRepository<tienda, Long> {

}
