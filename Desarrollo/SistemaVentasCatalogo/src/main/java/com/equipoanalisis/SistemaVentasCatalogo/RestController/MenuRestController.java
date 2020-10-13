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
import com.equipoanalisis.SistemaVentasCatalogo.Repository.MenuRepository;
import com.equipoanalisis.SistemaVentasCatalogo.entity.Menu;

@RestController
@RequestMapping("/api/v1")
public class MenuRestController {

	@Autowired
	private MenuRepository menuRepo;
	
    @GetMapping("/menu")
    public List<Menu> getMenu() {
        return menuRepo.findAll();
    }
    
    @GetMapping("/menu/{id}")
    public ResponseEntity<Menu> getMenuById(@PathVariable(value = "id") Long id)
        throws ResourceNotFoundException {
        Menu menu = menuRepo.findById(id)
          .orElseThrow(() -> new ResourceNotFoundException("Menu no encontrado"));
        return ResponseEntity.ok().body(menu);
    }
    
    @PostMapping("/menu")
    public Menu createMenu(@Validated @RequestBody Menu menu) {
        return menuRepo.save(menu);
    }
	
    @PutMapping("/menu/{id}")
    public ResponseEntity<Menu> updateMenu(@PathVariable(value = "id") Long id,
         @Validated @RequestBody Menu MenuDetalle) throws ResourceNotFoundException {
    	Menu menu = menuRepo.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("Menu No Encontrado"));

        menu.setDescripcion(MenuDetalle.getDescripcion());
        menu.setId_menu_padre(MenuDetalle.getId_menu_padre());
        menu.setUrl(MenuDetalle.getUrl());
        final Menu updateMenu = menuRepo.save(menu);
        return ResponseEntity.ok(updateMenu);
    }
    
    @DeleteMapping("/menu/{id}")
    public Map<String, Boolean> deleteMenu(@PathVariable(value = "id") Long id)
         throws ResourceNotFoundException {
        Menu menu = menuRepo.findById(id)
       .orElseThrow(() -> new ResourceNotFoundException("Menu No Encontrado"));

        menuRepo.delete(menu);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }


}
