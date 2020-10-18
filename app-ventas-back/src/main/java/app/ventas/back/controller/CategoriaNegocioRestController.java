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
import app.ventas.back.repository.CategoriaNegocioRepository;
import app.ventas.back.model.categoria_negocio;
import app.ventas.back.model.producto;
import app.ventas.back.repository.ProductoRepository;
import app.ventas.back.service.api.CategoriaNegocioServiceAPI;

@CrossOrigin("*")
//@CrossOrigin(origins = "http://localhost:4200" ,maxAge = 3600)
@RestController
@RequestMapping(value = "/categoria_negocio")
public class CategoriaNegocioRestController {

	@Autowired
	private CategoriaNegocioServiceAPI categoria_negocioServiceAPI;
	
	@Autowired
	private CategoriaNegocioRepository categoria_negocioRepository;
	
	//@GetMapping(value = "/all")
	@GetMapping
	public List<categoria_negocio> getAll() {
		return categoria_negocioServiceAPI.getAll();
	}
	
	@GetMapping(value = "/{id}")
	//@GetMapping
	public categoria_negocio find(@PathVariable Long id) {
		return categoria_negocioServiceAPI.get(id);
	}
	
	@GetMapping(value = "/prueba/{id}")
	public List<categoria_negocio> findByCategoriaNegocio(@PathVariable int id) {
		return categoria_negocioRepository.findByCategoriaNegocio(id);
	}
	
	//@PostMapping(value = "/save")
	@PostMapping
	public ResponseEntity<categoria_negocio> save(@RequestBody categoria_negocio categoria_negocio) {
		categoria_negocio obj = categoria_negocioServiceAPI.save(categoria_negocio);
		return new ResponseEntity<categoria_negocio>(obj, HttpStatus.OK);
	}
	
	@PutMapping(value = "/{id}")
	//@PutMapping
	public categoria_negocio edit(@RequestBody categoria_negocio e, @PathVariable("id") Long id) {
		e.setId_categoria(id);
		return categoria_negocioServiceAPI.save(e);
	}
	
	@DeleteMapping(value = "/{id}")
	//@DeleteMapping
	public ResponseEntity<categoria_negocio> delete(@PathVariable Long id) {
		categoria_negocio categoria_negocio = categoria_negocioServiceAPI.get(id);
		if (categoria_negocio != null) {
			categoria_negocioServiceAPI.delete(id);
		}else {
			return new ResponseEntity<categoria_negocio>(HttpStatus.NO_CONTENT);
		}
		
		return new ResponseEntity<categoria_negocio>(categoria_negocio, HttpStatus.OK);
	}

}
