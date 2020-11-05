import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepartidorPedidoDetallePage } from './repartidor-pedido-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: RepartidorPedidoDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepartidorPedidoDetallePageRoutingModule {}
