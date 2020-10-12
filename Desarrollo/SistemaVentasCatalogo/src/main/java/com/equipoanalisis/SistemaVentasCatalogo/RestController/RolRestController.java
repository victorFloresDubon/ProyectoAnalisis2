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
import com.equipoanalisis.SistemaVentasCatalogo.Repository.RolRepository;
import com.equipoanalisis.SistemaVentasCatalogo.entity.Rol;

@RestController
@RequestMapping("/api/v1")
public class RolRestController {

	@Autowired
	private RolRepository rolRepo;
	
    @GetMapping("/roles")
    public List<Rol> getRoles() {
        return rolRepo.findAll();
    }
    
    @GetMapping("/roles/{id}")
    public ResponseEntity<Rol> getRolById(@PathVariable(value = "id") Long id)
        throws ResourceNotFoundException {
        Rol rol = rolRepo.findById(id)
          .orElseThrow(() -> new ResourceNotFoundException("Rol no encontrado"));
        return ResponseEntity.ok().body(rol);
    }
    
    @PostMapping("/roles")
    public Rol createRol(@Validated @RequestBody Rol rol) {
        return rolRepo.save(rol);
    }
	
    @PutMapping("/roles/{id}")
    public ResponseEntity<Rol> updateRol(@PathVariable(value = "id") Long id,
         @Validated @RequestBody Rol RolDetalle) throws ResourceNotFoundException {
    	Rol rol = rolRepo.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("Rol No Encontrado"));

        rol.setDescripcion(RolDetalle.getDescripcion());
        final Rol updateRol = rolRepo.save(rol);
        return ResponseEntity.ok(updateRol);
    }
    
    @DeleteMapping("/roles/{id}")
    public Map<String, Boolean> deleteRol(@PathVariable(value = "id") Long id)
         throws ResourceNotFoundException {
        Rol rol = rolRepo.findById(id)
       .orElseThrow(() -> new ResourceNotFoundException("Rol No Encontrado"));

        rolRepo.delete(rol);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

}
