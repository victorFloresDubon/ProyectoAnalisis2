package com.equipoanalisis.SistemaVentasCatalogo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.equipoanalisis.SistemaVentasCatalogo.entity.MenuRol;

@Repository
public interface MenuRolRepository extends JpaRepository<MenuRol, Long>{

}
