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
import com.equipoanalisis.SistemaVentasCatalogo.Repository.PedidoDetalleRepository;
import com.equipoanalisis.SistemaVentasCatalogo.entity.PedidoDetalle;

@RestController
@RequestMapping("/pedidoDetalle")
@CrossOrigin("*")
public class PedidoDetalleRestController {

	@Autowired
	private PedidoDetalleRepository PedDetalleRepo;
	
    @GetMapping
    public List<PedidoDetalle> getPedidoDetalle() {
        return PedDetalleRepo.findAll();
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<PedidoDetalle> getPedidoDetalleById(@PathVariable(value = "id") int id)
        throws ResourceNotFoundException {
        PedidoDetalle pedDet = PedDetalleRepo.findById(id)
          .orElseThrow(() -> new ResourceNotFoundException("Pedido Detalle no encontrado"));
        return ResponseEntity.ok().body(pedDet);
    }
    
    @PostMapping
    public PedidoDetalle createPedidoDetalle(@Validated @RequestBody PedidoDetalle pedDet) {
        return PedDetalleRepo.save(pedDet);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<PedidoDetalle> updatePedidoDetalle(@PathVariable(value = "id") int id,
         @Validated @RequestBody PedidoDetalle PedidoDetalleDetalle) throws ResourceNotFoundException {
    	PedidoDetalle pedidoDetalle = PedDetalleRepo.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("PedidoDetalle No Encontrado"));

        pedidoDetalle.setId_producto(PedidoDetalleDetalle.getId_producto());
        final PedidoDetalle updatePedidoDetalle = PedDetalleRepo.save(pedidoDetalle);
        return ResponseEntity.ok(updatePedidoDetalle);
    }
    
    @DeleteMapping("/{id}")
    public Map<String, Boolean> deletePedidoDetalle(@PathVariable(value = "id") int id)
         throws ResourceNotFoundException {
        PedidoDetalle pedidoDetalle = PedDetalleRepo.findById(id)
       .orElseThrow(() -> new ResourceNotFoundException("PedidoDetalle No Encontrado"));

        PedDetalleRepo.delete(pedidoDetalle);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
    
}
