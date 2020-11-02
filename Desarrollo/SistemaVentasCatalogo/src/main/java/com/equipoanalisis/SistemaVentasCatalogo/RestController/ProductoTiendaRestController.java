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
import com.equipoanalisis.SistemaVentasCatalogo.Repository.ProductoTiendaRepository;
import com.equipoanalisis.SistemaVentasCatalogo.entity.ProductoTienda;

@RestController
@RequestMapping("/productoTienda")
@CrossOrigin("*")
public class ProductoTiendaRestController {

	@Autowired
	private ProductoTiendaRepository prodTiendaRepo;
	
    @GetMapping
    public List<ProductoTienda> getProductoTienda() {
        return prodTiendaRepo.findAll();
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<ProductoTienda> getProductoTiendaById(@PathVariable(value = "id") Long id)
        throws ResourceNotFoundException {
    	ProductoTienda prodTienda = prodTiendaRepo.findById(id)
          .orElseThrow(() -> new ResourceNotFoundException("ProductoTienda no encontrado"));
        return ResponseEntity.ok().body(prodTienda);
    }
    
    @PostMapping
    public ProductoTienda createProductoTienda(@Validated @RequestBody ProductoTienda prodTienda) {
        return prodTiendaRepo.save(prodTienda);
    }
	
    @PutMapping("/{id}")
    public ResponseEntity<ProductoTienda> updateProductoTienda(@PathVariable(value = "id") Long id,
         @Validated @RequestBody ProductoTienda ProductoTiendaDetalle) throws ResourceNotFoundException {
    	ProductoTienda prodTienda = prodTiendaRepo.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("ProductoTienda No Encontrado"));

        prodTienda.setId_producto(ProductoTiendaDetalle.getId_producto());
        prodTienda.setId_tienda(ProductoTiendaDetalle.getId_tienda());
        final ProductoTienda updateProductoTienda = prodTiendaRepo.save(prodTienda);
        return ResponseEntity.ok(updateProductoTienda);
    }
    
    @DeleteMapping("/{id}")
    public Map<String, Boolean> deleteProductoTienda(@PathVariable(value = "id") Long id)
         throws ResourceNotFoundException {
    	ProductoTienda prodTienda = prodTiendaRepo.findById(id)
       .orElseThrow(() -> new ResourceNotFoundException("ProductoTienda No Encontrado"));

        prodTiendaRepo.delete(prodTienda);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

    
}
