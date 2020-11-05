import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientePedidoAgregarPageRoutingModule } from './cliente-pedido-agregar-routing.module';

import { ClientePedidoAgregarPage } from './cliente-pedido-agregar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientePedidoAgregarPageRoutingModule
  ],
  declarations: [ClientePedidoAgregarPage]
})
export class ClientePedidoAgregarPageModule {}
