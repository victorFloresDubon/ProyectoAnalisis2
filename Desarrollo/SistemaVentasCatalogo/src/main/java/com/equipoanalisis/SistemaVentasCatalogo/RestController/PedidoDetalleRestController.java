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
import com.equipoanalisis.SistemaVentasCatalogo.Repository.PedidoDetalleRepository;
import com.equipoanalisis.SistemaVentasCatalogo.entity.PedidoDetalle;

@RestController
@RequestMapping("/api/v1")
public class PedidoDetalleRestController {

	@Autowired
	private PedidoDetalleRepository PedDetalleRepo;
	
    @GetMapping("/PedidoDetalle")
    public List<PedidoDetalle> getPedidoDetalle() {
        return PedDetalleRepo.findAll();
    }
    
    @GetMapping("/PedidoDetalle/{id}")
    public ResponseEntity<PedidoDetalle> getPedidoDetalleById(@PathVariable(value = "id") int id)
        throws ResourceNotFoundException {
        PedidoDetalle pedDet = PedDetalleRepo.findById(id)
          .orElseThrow(() -> new ResourceNotFoundException("Pedido Detalle no encontrado"));
        return ResponseEntity.ok().body(pedDet);
    }
    
    @PostMapping("/PedidoDetalle")
    public PedidoDetalle createPedidoDetalle(@Validated @RequestBody PedidoDetalle pedDet) {
        return PedDetalleRepo.save(pedDet);
    }
    
    @PutMapping("/PedidoDetalle/{id_linea}/{id_pedido}")
    public ResponseEntity<PedidoDetalle> updatePedidoDetalle(
        	@PathVariable(value = "id_linea") int id_linea,
        	@PathVariable(value = "id_pedido") int id_pedido,
        	@Validated @RequestBody PedidoDetalle PedDetalle
    		) {
    		PedidoDetalle ped = PedDetalleRepo.findByPedidoDetalle(id_linea, id_pedido);
 
            ped.setId_producto(PedDetalle.getId_producto());
            ped.setCantidad(PedDetalle.getCantidad());
            ped.setTotal(PedDetalle.getTotal());
            ped.setObservacion(PedDetalle.getObservacion());   
            final PedidoDetalle updatePedidoDetalle = PedDetalleRepo.save(ped);
            return ResponseEntity.ok(updatePedidoDetalle);  
               	
    		}
           	
    
    @DeleteMapping("/PedidoDetalle/{id_linea}/{id_pedido}")
    public Map<String, Boolean> deletePedidoDetalle(
        	@PathVariable(value = "id_linea") int id_linea,
        	@PathVariable(value = "id_pedido") int id_pedido
        	) {
    	PedidoDetalle ped = PedDetalleRepo.findByPedidoDetalle(id_linea, id_pedido);
    	PedDetalleRepo.delete(ped);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
    
    
    
}
