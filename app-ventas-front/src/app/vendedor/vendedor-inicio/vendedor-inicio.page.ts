import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Usuario } from '../../modelo/Usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-vendedor-inicio',
  templateUrl: './vendedor-inicio.page.html',
  styleUrls: ['./vendedor-inicio.page.scss'],
})
export class VendedorInicioPage implements OnInit {

  modelUsuario = new Usuario();
  usuarios:Usuario[];

  constructor(
    private router:Router, 
    private menu: MenuController, 
    private serviceUsuario:UsuarioService 
  ) { }

  ngOnInit(){
    let id=localStorage.getItem("id_usuario");
    this.serviceUsuario.getUsuarioId(+id)
    .subscribe(data=>{
      this.modelUsuario=data;
    })
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  toggleMenu(){
    this.menu.toggle();
  }

}
