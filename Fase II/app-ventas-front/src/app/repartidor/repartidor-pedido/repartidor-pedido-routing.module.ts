import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepartidorPedidoPage } from './repartidor-pedido.page';

const routes: Routes = [
  {
    path: '',
    component: RepartidorPedidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepartidorPedidoPageRoutingModule {}
