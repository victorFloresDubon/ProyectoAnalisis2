package app.ventas.back.dao.api;

import org.springframework.data.repository.CrudRepository;

import app.ventas.back.model.empleado;

public interface EmpleadoDaoAPI extends CrudRepository<empleado, Long> {

}
