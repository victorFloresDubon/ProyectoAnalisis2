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
import com.equipoanalisis.SistemaVentasCatalogo.Repository.PedidoRepository;
import com.equipoanalisis.SistemaVentasCatalogo.entity.Pedido;

@RestController
@RequestMapping("/pedido")
@CrossOrigin("*")
public class PedidoRestController {

	@Autowired
	private PedidoRepository pedidoRepo;
	
    @GetMapping
    public List<Pedido> getPedido() {
        return pedidoRepo.findAll();
    }
    
    @GetMapping("/pedidosPorCliente/{id_usuario}")
    public List<Pedido> getpedidosPorCliente(@PathVariable int id_usuario)
         {
    	return pedidoRepo.pedidosPorCliente(id_usuario);
         }
 
    @GetMapping("/pedidosPorRepartidor/{id_usuario_repartidor}")
    public List<Pedido> getpedidosPorRepartidor(@PathVariable int id_usuario_repartidor)
         {
    	return pedidoRepo.pedidosPorRepartidor(id_usuario_repartidor);
         }
    
    @GetMapping("/pedidosPorVendedor/{id_usuario}")
    public List<Pedido> getpedidosPorVendedor(@PathVariable int id_usuario)
         {
    	return pedidoRepo.pedidosPorVendedor(id_usuario);
         }
    
    @GetMapping("/{id}")
    public ResponseEntity<Pedido> getPedidoById(@PathVariable(value = "id") int id)
        throws ResourceNotFoundException {
        Pedido pedido = pedidoRepo.findById(id)
          .orElseThrow(() -> new ResourceNotFoundException("Pedido no encontrado"));
        return ResponseEntity.ok().body(pedido);
    }
    
    @PostMapping
    public Pedido createPedido(@Validated @RequestBody Pedido pedido) {
        return pedidoRepo.save(pedido);
    }
	
    @PutMapping("/{id}")
    public ResponseEntity<Pedido> updatePedido(@PathVariable(value = "id") int id,
         @Validated @RequestBody Pedido pedidoDetalle) throws ResourceNotFoundException {
    	Pedido pedido = pedidoRepo.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("Pedido No Encontrado"));

    	pedido.setId_usuario(pedidoDetalle.getId_usuario());
    	pedido.setId_tienda(pedidoDetalle.getId_tienda());
    	pedido.setListo(pedidoDetalle.getListo());
    	pedido.setEntregado(pedidoDetalle.getEntregado()); 
    	pedido.setId_usuario_repartidor(pedidoDetalle.getId_usuario_repartidor());
    	pedido.setEsdomicilio(pedidoDetalle.getEsdomicilio());
    	final Pedido updatePedido = pedidoRepo.save(pedido);
        return ResponseEntity.ok(updatePedido);
    }
    
    @DeleteMapping("/{id}")
    public Map<String, Boolean> deletePedido(@PathVariable(value = "id") int id)
         throws ResourceNotFoundException {
        Pedido pedido = pedidoRepo.findById(id)
       .orElseThrow(() -> new ResourceNotFoundException("Pedido No Encontrado"));

        pedidoRepo.delete(pedido);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
