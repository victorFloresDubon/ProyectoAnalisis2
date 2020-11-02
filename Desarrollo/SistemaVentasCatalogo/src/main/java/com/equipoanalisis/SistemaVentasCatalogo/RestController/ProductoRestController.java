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
import com.equipoanalisis.SistemaVentasCatalogo.Repository.ProductoRepository;
import com.equipoanalisis.SistemaVentasCatalogo.entity.Producto;

@RestController
@RequestMapping("/producto")
@CrossOrigin("*")
public class ProductoRestController {

	@Autowired
	private ProductoRepository prodRepo;
	
    @GetMapping
    public List<Producto> getProducto() {
        return prodRepo.findAll();
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Producto> getProductoById(@PathVariable(value = "id") int id)
        throws ResourceNotFoundException {
    	Producto prod = prodRepo.findById(id)
          .orElseThrow(() -> new ResourceNotFoundException("Prodcuto no encontrado"));
        return ResponseEntity.ok().body(prod);
    }
    
    @PostMapping
    public Producto createProducto(@Validated @RequestBody Producto prod) {
        return prodRepo.save(prod);
    }
	
    @PutMapping("/{id}")
    public ResponseEntity<Producto> updateProducto(@PathVariable(value = "id") int id,
         @Validated @RequestBody Producto ProductoDetalle) throws ResourceNotFoundException {
    	Producto prod = prodRepo.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("Producto No Encontrado"));

    	prod.setId_tienda(ProductoDetalle.getId_tienda());
    	prod.setNombre(ProductoDetalle.getNombre());
    	prod.setPrecio(ProductoDetalle.getPrecio());
    	prod.setFoto(ProductoDetalle.getFoto());
        final Producto updateProducto = prodRepo.save(prod);
        return ResponseEntity.ok(updateProducto);
    }
    
    @DeleteMapping("/{id}")
    public Map<String, Boolean> deleteProducto(@PathVariable(value = "id") int id)
         throws ResourceNotFoundException {
        Producto prod = prodRepo.findById(id)
       .orElseThrow(() -> new ResourceNotFoundException("Producto No Encontrado"));

        prodRepo.delete(prod);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

	
}
