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
import com.equipoanalisis.SistemaVentasCatalogo.Repository.UsuarioRepository;
import com.equipoanalisis.SistemaVentasCatalogo.entity.Usuario;


@RestController
@RequestMapping("usuario")
@CrossOrigin("*")
public class UsuarioRestController {

	@Autowired
	private UsuarioRepository usrRepo;
	
    @GetMapping
    public List<Usuario> getUsuarios() {
        return usrRepo.findAll();
    }
    

    @GetMapping("/{id}")
    public ResponseEntity<Usuario> getUsuarioById(@PathVariable(value = "id") int id)
        throws ResourceNotFoundException {
        Usuario usr = usrRepo.findById(id)
          .orElseThrow(() -> new ResourceNotFoundException("Usuario no encontrado"));
        return ResponseEntity.ok().body(usr);
    }
    

    @PostMapping
    public Usuario createUsuario(@Validated @RequestBody Usuario usr) {
        return usrRepo.save(usr);
    }
    

    @PutMapping("/{id}")
    public ResponseEntity<Usuario> updateUsuario(@PathVariable(value = "id") int id,
         @Validated @RequestBody Usuario usuDetalles) throws ResourceNotFoundException {
    	Usuario employee = usrRepo.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("Usuario No Encontrado"));

        employee.setNombre(usuDetalles.getNombre());
        employee.setApellido(usuDetalles.getApellido());
        employee.setDireccion(usuDetalles.getDireccion());
        final Usuario updateUsuario = usrRepo.save(employee);
        return ResponseEntity.ok(updateUsuario);
    }
    

    @DeleteMapping("/{id}")
    public Map<String, Boolean> deleteUsuario(@PathVariable(value = "id") int id)
         throws ResourceNotFoundException {
        Usuario user = usrRepo.findById(id)
       .orElseThrow(() -> new ResourceNotFoundException("Usuario No Encontrado"));

        usrRepo.delete(user);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
    
    
}
