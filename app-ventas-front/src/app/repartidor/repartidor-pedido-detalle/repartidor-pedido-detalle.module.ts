import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepartidorPedidoDetallePageRoutingModule } from './repartidor-pedido-detalle-routing.module';

import { RepartidorPedidoDetallePage } from './repartidor-pedido-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepartidorPedidoDetallePageRoutingModule
  ],
  declarations: [RepartidorPedidoDetallePage]
})
export class RepartidorPedidoDetallePageModule {}
