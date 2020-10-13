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
    
    @GetMapping("/CategoriaNegocios/{id}")
    public ResponseEntity<CategoriaNegocio> getCategoriaNegocioById(@PathVariable(value = "id") Long id)
        throws ResourceNotFoundException {
    	CategoriaNegocio CatNeg = catRepo.findById(id)
          .orElseThrow(() -> new ResourceNotFoundException("Categoria no encontrada"));
        return ResponseEntity.ok().body(CatNeg);
    }
    
    @PostMapping("/CategoriaNegocios")
    public CategoriaNegocio createCatNegocio(@Validated @RequestBody CategoriaNegocio CatNeg) {
        return catRepo.save(CatNeg);
    }
    
    @PutMapping("/CategoriaNegocios/{id}")
    public ResponseEntity<CategoriaNegocio> updateCategoria(@PathVariable(value = "id") Long id,
         @Validated @RequestBody CategoriaNegocio CatDetalle) throws ResourceNotFoundException {
    	CategoriaNegocio CatNeg = catRepo.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("Categoria No Encontrada"));

    	CatNeg.setDes_categoria(CatDetalle.getDes_categoria());
        final CategoriaNegocio updateCategoria = catRepo.save(CatNeg);
        return ResponseEntity.ok(updateCategoria);
    }
    
    @DeleteMapping("/CategoriaNegocios/{id}")
    public Map<String, Boolean> deleteCategoria(@PathVariable(value = "id") Long id)
         throws ResourceNotFoundException {
    	CategoriaNegocio CatNeg = catRepo.findById(id)
       .orElseThrow(() -> new ResourceNotFoundException("Categoria No Encontrada"));

        catRepo.delete(CatNeg);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
    
    
}
