package app.ventas.back.dao.api;

import org.springframework.data.repository.CrudRepository;

import app.ventas.back.model.categoria_negocio;

public interface CategoriaNegocioDaoAPI extends CrudRepository<categoria_negocio, Long> {

}
