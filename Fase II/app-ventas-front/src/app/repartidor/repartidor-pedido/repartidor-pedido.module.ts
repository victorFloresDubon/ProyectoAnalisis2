import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepartidorPedidoPageRoutingModule } from './repartidor-pedido-routing.module';

import { RepartidorPedidoPage } from './repartidor-pedido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepartidorPedidoPageRoutingModule
  ],
  declarations: [RepartidorPedidoPage]
})
export class RepartidorPedidoPageModule {}
