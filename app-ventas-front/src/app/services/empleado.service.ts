import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../modelo/Empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private http:HttpClient) { }

  url='http://localhost:8080/empleado';

  getEmpleados(){
    return this.http.get<Empleado[]>(this.url);
  }

  createEmpleado(empleado:Empleado){
    return this.http.post<Empleado>(this.url,empleado);
  }

  getEmpleadoId(id:number){
    return this.http.get<Empleado>(this.url+"/"+id);
  }

  updateEmpleado(empleado:Empleado){
    return this.http.put<Empleado>(this.url+"/"+empleado.id_empleado,empleado);
  }

  deleteEmpleado(empleado:Empleado){
    return this.http.delete<Empleado>(this.url+"/"+empleado.id_empleado);
  }


}
