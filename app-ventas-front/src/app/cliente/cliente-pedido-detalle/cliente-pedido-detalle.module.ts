import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientePedidoDetallePageRoutingModule } from './cliente-pedido-detalle-routing.module';

import { ClientePedidoDetallePage } from './cliente-pedido-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientePedidoDetallePageRoutingModule
  ],
  declarations: [ClientePedidoDetallePage]
})
export class ClientePedidoDetallePageModule {}
