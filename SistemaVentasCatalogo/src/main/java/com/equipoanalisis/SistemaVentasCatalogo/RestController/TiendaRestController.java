package com.equipoanalisis.SistemaVentasCatalogo.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.equipoanalisis.SistemaVentasCatalogo.Repository.TiendaRepository;
import com.equipoanalisis.SistemaVentasCatalogo.entity.Tienda;

@RestController
@RequestMapping("tienda")
@CrossOrigin("*")
public class TiendaRestController{

	@Autowired
	private TiendaRepository tiendaRepo;
	
    @GetMapping
    public List<Tienda> getTienda() {
        return tiendaRepo.findAll();
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Tienda> getTiendaById(@PathVariable(value = "id") int id)
        throws ResourceNotFoundException {
        Tienda tienda = tiendaRepo.findById(id)
          .orElseThrow(() -> new ResourceNotFoundException("Tienda no encontrado"));
        return ResponseEntity.ok().body(tienda);
    }
    
    @PostMapping
    public Tienda createTienda(@Validated @RequestBody Tienda tienda) {
        return tiendaRepo.save(tienda);
    }
	
    @PutMapping("/{id}")
    public ResponseEntity<Tienda> updateTienda(@PathVariable(value = "id") int id,
         @Validated @RequestBody Tienda TiendaDetalle) throws ResourceNotFoundException {
    	Tienda tienda = tiendaRepo.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("Tienda No Encontrado"));

        tienda.setId_categoria(TiendaDetalle.getId_categoria());
        tienda.setId_usuario(TiendaDetalle.getId_usuario());
        tienda.setNombre(TiendaDetalle.getNombre());
        tienda.setDireccion(TiendaDetalle.getDireccion());
        tienda.setTelefono(TiendaDetalle.getTelefono());
        tienda.setFoto(TiendaDetalle.getFoto());
        final Tienda updateTienda = tiendaRepo.save(tienda);
        return ResponseEntity.ok(updateTienda);
    }
    
    @DeleteMapping("/{id}")
    public Map<String, Boolean> deleteTienda(@PathVariable(value = "id") int id)
         throws ResourceNotFoundException {
        Tienda tienda = tiendaRepo.findById(id)
       .orElseThrow(() -> new ResourceNotFoundException("Tienda No Encontrado"));

        tiendaRepo.delete(tienda);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
    
    //Querys
    @GetMapping(value="/buscarusuario/{id_usuario}")
    public List<Tienda> buscarUsuario(@PathVariable int id_usuario){
    	return tiendaRepo.buscarUsuario(id_usuario);
    }
    
    @GetMapping(value="/buscarcategoria/{id_categoria}")
    public List<Tienda> buscarCategoria(@PathVariable int id_categoria){
    	return tiendaRepo.buscarCategoria(id_categoria);
    }
    
}
