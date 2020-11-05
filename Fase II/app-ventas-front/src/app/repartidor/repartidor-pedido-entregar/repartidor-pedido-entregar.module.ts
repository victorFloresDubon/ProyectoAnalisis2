import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepartidorPedidoEntregarPageRoutingModule } from './repartidor-pedido-entregar-routing.module';

import { RepartidorPedidoEntregarPage } from './repartidor-pedido-entregar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepartidorPedidoEntregarPageRoutingModule
  ],
  declarations: [RepartidorPedidoEntregarPage]
})
export class RepartidorPedidoEntregarPageModule {}
