package com.equipoanalisis.SistemaVentasCatalogo.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
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
@RequestMapping("/api/v1")
public class TiendaRestController{

	@Autowired
	private TiendaRepository tiendaRepo;
	
    @GetMapping("/tienda")
    public List<Tienda> getTienda() {
        return tiendaRepo.findAll();
    }
    
    @GetMapping("/tienda/{id}")
    public ResponseEntity<Tienda> getTiendaById(@PathVariable(value = "id") Long id)
        throws ResourceNotFoundException {
        Tienda tienda = tiendaRepo.findById(id)
          .orElseThrow(() -> new ResourceNotFoundException("Tienda no encontrado"));
        return ResponseEntity.ok().body(tienda);
    }
    
    @PostMapping("/tienda")
    public Tienda createTienda(@Validated @RequestBody Tienda tienda) {
        return tiendaRepo.save(tienda);
    }
	
    @PutMapping("/tienda/{id}")
    public ResponseEntity<Tienda> updateTienda(@PathVariable(value = "id") Long id,
         @Validated @RequestBody Tienda TiendaDetalle) throws ResourceNotFoundException {
    	Tienda tienda = tiendaRepo.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("Tienda No Encontrado"));

        tienda.setId_categoria(TiendaDetalle.getId_categoria());
        tienda.setId_usuario(TiendaDetalle.getId_usuario());
        tienda.setNombre(TiendaDetalle.getNombre());
        tienda.setDireccion(TiendaDetalle.getDireccion());
        tienda.setTelefono(TiendaDetalle.getTelefono());
        tienda.setCuota_envio(TiendaDetalle.getCuota_envio());
        final Tienda updateTienda = tiendaRepo.save(tienda);
        return ResponseEntity.ok(updateTienda);
    }
    
    @DeleteMapping("/tienda/{id}")
    public Map<String, Boolean> deleteTienda(@PathVariable(value = "id") Long id)
         throws ResourceNotFoundException {
        Tienda tienda = tiendaRepo.findById(id)
       .orElseThrow(() -> new ResourceNotFoundException("Tienda No Encontrado"));

        tiendaRepo.delete(tienda);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
