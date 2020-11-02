package com.equipoanalisis.SistemaVentasCatalogo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.equipoanalisis.SistemaVentasCatalogo.entity.Rol;

@Repository
public interface RolRepository  extends JpaRepository<Rol, Integer>{

}
