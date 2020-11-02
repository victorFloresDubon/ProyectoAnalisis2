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
import com.equipoanalisis.SistemaVentasCatalogo.Repository.MenuRolRepository;
import com.equipoanalisis.SistemaVentasCatalogo.entity.MenuRol;

@RestController
@RequestMapping("/menuRol")
@CrossOrigin("*")

public class MenuRolRestController {

	@Autowired
	private MenuRolRepository menuRolRepo;
	
    @GetMapping
    public List<MenuRol> getMenuRol() {
        return menuRolRepo.findAll();
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<MenuRol> getMenuRolById(@PathVariable(value = "id") Long id)
        throws ResourceNotFoundException {
        MenuRol menuRol = menuRolRepo.findById(id)
          .orElseThrow(() -> new ResourceNotFoundException("Menu Rol no encontrado"));
        return ResponseEntity.ok().body(menuRol);
    }
    
    @PostMapping
    public MenuRol createMenuRol(@Validated @RequestBody MenuRol menuRol) {
        return menuRolRepo.save(menuRol);
    }
	
    @PutMapping("/{id}")
    public ResponseEntity<MenuRol> updateMenu(@PathVariable(value = "id") Long id,
         @Validated @RequestBody MenuRol MenuRolDetalle) throws ResourceNotFoundException {
    	MenuRol menuRol = menuRolRepo.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("Menu Rol No Encontrado"));

    	menuRol.setId_rol(MenuRolDetalle.getId_rol());
    	final MenuRol updateMenuRol = menuRolRepo.save(menuRol);
        return ResponseEntity.ok(updateMenuRol);
    }
    
    @DeleteMapping("/{id}")
    public Map<String, Boolean> deleteMenuRol(@PathVariable(value = "id") Long id)
         throws ResourceNotFoundException {
        MenuRol menuRol = menuRolRepo.findById(id)
       .orElseThrow(() -> new ResourceNotFoundException("Menu Rol No Encontrado"));

        menuRolRepo.delete(menuRol);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

	
}
