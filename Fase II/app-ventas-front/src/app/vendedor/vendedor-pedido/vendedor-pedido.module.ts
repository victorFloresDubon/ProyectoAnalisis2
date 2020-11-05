import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendedorPedidoPageRoutingModule } from './vendedor-pedido-routing.module';

import { VendedorPedidoPage } from './vendedor-pedido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendedorPedidoPageRoutingModule
  ],
  declarations: [VendedorPedidoPage]
})
export class VendedorPedidoPageModule {}
