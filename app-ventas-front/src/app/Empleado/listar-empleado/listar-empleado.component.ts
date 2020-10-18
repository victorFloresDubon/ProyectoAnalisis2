import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadoService } from '../../services/empleado.service'
import { Empleado } from '../../modelo/Empleado';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-listar-empleado',
  templateUrl: './listar-empleado.component.html',
  styleUrls: ['./listar-empleado.component.scss'],
})
export class ListarEmpleadoComponent implements OnInit {


  empleados:Empleado[];
  constructor(
    private service: EmpleadoService, 
    private router:Router, 
    private alertController: AlertController,
    private toastController: ToastController,
    private loadingController: LoadingController
    ) { }

  async ngOnInit(){
    const loading = await this.loadingController.create({
      message: 'Cargando......',
    });
    await loading.present();
    this.service.getEmpleados()
    .subscribe(async (data)=>{
      this.empleados=data;
      await loading.dismiss();
    });
  }

  async nuevoEmpleado() {
    const alert = await this.alertController.create({
      header: 'Nuevo Empleado',
      inputs: [
        {
          name: 'id_tienda',
          type: 'number',
          placeholder: 'Tienda'
        },
        {
          name: 'p_nombre',
          type: 'text',
          placeholder: 'Primer Nombre'
        },
        {
          name: 's_nombre',
          type: 'text',
          placeholder: 'Segundo Nombre'
        },
        {
          name: 'p_apellido',
          type: 'text',
          placeholder: 'Primer Apellido'
        },
        {
          name: 's_apellido',
          type: 'text',
          placeholder: 'Segundo Apellido'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Crear',
          handler: (data) => {
            this.crearEmpleado(data.id_empleado, data.id_tienda, data.p_nombre, data.s_nombre, data.p_apellido, data.s_apellido);
          }
        }
      ]
    });
    await alert.present();
  }

  crearEmpleado(id_empleado: number, id_tienda: number, p_nombre: String, s_nombre: String, p_apellido: String, s_apellido: String) {
    const empleado = {
      id_empleado,
      id_tienda,
      p_nombre,
      s_nombre,
      p_apellido,
      s_apellido,
      completed: true
    };
    this.service.createEmpleado(empleado)
    .subscribe((data) => {
      this.empleados.unshift(data);
    });
  }

  borrarEmpleado(empleado:Empleado){
    this.service.deleteEmpleado(empleado)
    .subscribe(data=>{
      this.empleados=this.empleados.filter(p=>p!==empleado);
      this.mostrarBorrado('empleado eliminado correctamente');
    })
  }

  Editar(empleado:Empleado):void{
    localStorage.setItem("id", empleado.id_empleado.toString());
    this.router.navigate(["editarEmpleado"]);
  }

  async mostrarBorrado(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    await toast.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Cargando......',
      duration: 2000
    });
    await loading.present();
    return loading;
  }

}
