import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientePedidoEditarPageRoutingModule } from './cliente-pedido-editar-routing.module';

import { ClientePedidoEditarPage } from './cliente-pedido-editar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientePedidoEditarPageRoutingModule
  ],
  declarations: [ClientePedidoEditarPage]
})
export class ClientePedidoEditarPageModule {}
