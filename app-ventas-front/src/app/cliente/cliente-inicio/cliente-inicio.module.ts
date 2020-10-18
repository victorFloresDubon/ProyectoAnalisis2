import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuClienteComponent } from '../../components/menu-cliente/menu-cliente.component';
import { IonicModule } from '@ionic/angular';

import { ClienteInicioPageRoutingModule } from './cliente-inicio-routing.module';

import { ClienteInicioPage } from './cliente-inicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteInicioPageRoutingModule
  ],
  exports: [
    MenuClienteComponent
  ],
  declarations: [ClienteInicioPage,MenuClienteComponent]
})
export class ClienteInicioPageModule {}
