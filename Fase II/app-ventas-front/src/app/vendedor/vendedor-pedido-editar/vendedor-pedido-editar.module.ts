import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendedorPedidoEditarPageRoutingModule } from './vendedor-pedido-editar-routing.module';

import { VendedorPedidoEditarPage } from './vendedor-pedido-editar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendedorPedidoEditarPageRoutingModule
  ],
  declarations: [VendedorPedidoEditarPage]
})
export class VendedorPedidoEditarPageModule {}
