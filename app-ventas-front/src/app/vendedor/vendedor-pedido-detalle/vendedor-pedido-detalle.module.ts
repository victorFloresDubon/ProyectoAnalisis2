import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendedorPedidoDetallePageRoutingModule } from './vendedor-pedido-detalle-routing.module';

import { VendedorPedidoDetallePage } from './vendedor-pedido-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendedorPedidoDetallePageRoutingModule
  ],
  declarations: [VendedorPedidoDetallePage]
})
export class VendedorPedidoDetallePageModule {}
