package app.ventas.back.dao.api;

import org.springframework.data.repository.CrudRepository;

import app.ventas.back.model.producto;

public interface ProductoDaoAPI extends CrudRepository<producto, Long> {

}
