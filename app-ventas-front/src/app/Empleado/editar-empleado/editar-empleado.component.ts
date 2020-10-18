import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../modelo/Empleado';
import { EmpleadoService } from '../../services/empleado.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.scss'],
})
export class EditarEmpleadoComponent implements OnInit {
  
  empleados = new Empleado();
  constructor(private router:Router, private service: EmpleadoService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.service.getEmpleadoId(+id)
    .subscribe(data=>{
      this.empleados=data;
    })
  }

  Actualizar(empleado:Empleado){
    this.service.updateEmpleado(empleado)
    .subscribe(data=>{
      this.empleados=data;
      this.router.navigate(["listarEmpleado"]);
    })
  }

}
