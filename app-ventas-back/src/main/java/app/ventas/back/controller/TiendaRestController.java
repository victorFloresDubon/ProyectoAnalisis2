package app.ventas.back.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import app.ventas.back.model.producto;
import app.ventas.back.model.tienda;
import app.ventas.back.repository.ProductoRepository;
import app.ventas.back.service.api.TiendaServiceAPI;

@RestController
@RequestMapping(value = "/tienda")
@CrossOrigin("*")
public class TiendaRestController {

	@Autowired
	private TiendaServiceAPI tiendaServiceAPI;
	
	@Autowired
	private ProductoRepository productoRepository;

	@GetMapping
	public List<tienda> getAll() {
		return tiendaServiceAPI.getAll();
	}
	
	@GetMapping(value = "/{id}")
	public tienda find(@PathVariable Long id) {
		return tiendaServiceAPI.get(id);
	}
	
	@GetMapping(value = "/prueba/{id}")
	public List<producto> findByTienda(@PathVariable int id) {
		return productoRepository.findByTienda(id);
	}

	@PostMapping
	public ResponseEntity<tienda> save(@RequestBody tienda tienda) {
		tienda obj = tiendaServiceAPI.save(tienda);
		return new ResponseEntity<tienda>(obj, HttpStatus.OK);
	}
	
	@PutMapping(value = "/{id}")
	public tienda edit(@RequestBody tienda t, @PathVariable("id") Long id) {
		t.setId_tienda(id);
		return tiendaServiceAPI.save(t);
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<tienda> delete(@PathVariable Long id) {
		tienda tienda = tiendaServiceAPI.get(id);
		if (tienda != null) {
			tiendaServiceAPI.delete(id);
		}else {
			return new ResponseEntity<tienda>(HttpStatus.NO_CONTENT);
		}
		
		return new ResponseEntity<tienda>(tienda, HttpStatus.OK);
	}

}
