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
import com.equipoanalisis.SistemaVentasCatalogo.Repository.ParametrosRepository;
import com.equipoanalisis.SistemaVentasCatalogo.entity.Parametro;

@RestController
@RequestMapping("/api/v1")
public class ParametrosRestController {

	@Autowired
	private ParametrosRepository parRepo;
	
    @GetMapping("/parametros")
    public List<Parametro> getParametros() {
        return parRepo.findAll();
    }
    
    @GetMapping("/parametros/{id}")
    public ResponseEntity<Parametro> getParametroById(@PathVariable(value = "id") Long id)
        throws ResourceNotFoundException {
    	Parametro par = parRepo.findById(id)
          .orElseThrow(() -> new ResourceNotFoundException("Parametro no encontrado"));
        return ResponseEntity.ok().body(par);
    }
    
    @PostMapping("/parametros")
    public Parametro createParametros(@Validated @RequestBody Parametro par) {
        return parRepo.save(par);
    }
	
    @PutMapping("/parametros/{id}")
    public ResponseEntity<Parametro> updateParametros(@PathVariable(value = "id") Long id,
         @Validated @RequestBody Parametro ParametrosDetalle) throws ResourceNotFoundException {
    	Parametro par = parRepo.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("Parametros No Encontrado"));

    	par.setNombre_aplicacion(ParametrosDetalle.getNombre_aplicacion());
    	par.setCuota_fija(ParametrosDetalle.getCuota_fija());
    	par.setMonto_entrega(ParametrosDetalle.getMonto_entrega());    	
    	final Parametro updateParametros = parRepo.save(par);
        return ResponseEntity.ok(updateParametros);
    }
    
    @DeleteMapping("/parametros/{id}")
    public Map<String, Boolean> deleteMenuRol(@PathVariable(value = "id") Long id)
         throws ResourceNotFoundException {
        Parametro par = parRepo.findById(id)
       .orElseThrow(() -> new ResourceNotFoundException("Parametros No Encontrado"));

        parRepo.delete(par);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
