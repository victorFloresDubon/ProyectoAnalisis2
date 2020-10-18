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

import app.ventas.back.model.usuario;
import app.ventas.back.service.api.UsuarioServiceAPI;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/usuario")
public class UsuarioRestController {

	@Autowired
	private UsuarioServiceAPI usuarioServiceAPI;
	
	@GetMapping
	public List<usuario> getAll() {
		return usuarioServiceAPI.getAll();
	}
	
	@GetMapping(value = "/{id}")
	public usuario find(@PathVariable Long id) {
		return usuarioServiceAPI.get(id);
	}
	
	@PostMapping
	public ResponseEntity<usuario> save(@RequestBody usuario usuario) {
		usuario obj = usuarioServiceAPI.save(usuario);
		return new ResponseEntity<usuario>(obj, HttpStatus.OK);
	}
	
	@PutMapping(value = "/{id}")
	public usuario edit(@RequestBody usuario e, @PathVariable("id") Long id) {
		e.setId_usuario(id);
		return usuarioServiceAPI.save(e);
	}
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<usuario> delete(@PathVariable Long id) {
		usuario usuario = usuarioServiceAPI.get(id);
		if (usuario != null) {
			usuarioServiceAPI.delete(id);
		}else {
			return new ResponseEntity<usuario>(HttpStatus.NO_CONTENT);
		}
		
		return new ResponseEntity<usuario>(usuario, HttpStatus.OK);
	}

}
