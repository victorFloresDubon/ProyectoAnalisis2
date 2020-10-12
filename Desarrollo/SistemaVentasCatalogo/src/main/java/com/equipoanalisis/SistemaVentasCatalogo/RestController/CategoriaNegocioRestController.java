package com.equipoanalisis.SistemaVentasCatalogo.RestController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.equipoanalisis.SistemaVentasCatalogo.Repository.CategoriaNegocioRepository;
import com.equipoanalisis.SistemaVentasCatalogo.entity.CategoriaNegocio;

@RestController
@RequestMapping("/api/v1")
public class CategoriaNegocioRestController {

	@Autowired
	private CategoriaNegocioRepository catRepo;
	
    @GetMapping("/CategoriaNegocios")
    public List<CategoriaNegocio> getCategorias() {
        return catRepo.findAll();
    }
    
    @PutMapping("/CategoriaNegocios/{id}")
    public ResponseEntity<CategoriaNegocio> updateCategoria(@PathVariable(value = "id") Long id,
         @Validated @RequestBody CategoriaNegocio CatDetalle) throws ResourceNotFoundException {
    	CategoriaNegocio CatNeg = catRepo.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("Categoria No Encontrada"));

    	CatNeg.setDescripcionCategoria(CatDetalle.getDescripcionCategoria());
        final CategoriaNegocio updateCategoria = catRepo.save(CatNeg);
        return ResponseEntity.ok(updateCategoria);
    }
    
    
}
