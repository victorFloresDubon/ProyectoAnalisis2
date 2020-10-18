package app.ventas.back.dao.api;

import org.springframework.data.repository.CrudRepository;

import app.ventas.back.model.inventario;

public interface InventarioDaoAPI extends CrudRepository<inventario, Long> {

}
