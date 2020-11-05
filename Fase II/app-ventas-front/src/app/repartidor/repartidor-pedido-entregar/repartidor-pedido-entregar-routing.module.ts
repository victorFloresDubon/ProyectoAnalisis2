import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepartidorPedidoEntregarPage } from './repartidor-pedido-entregar.page';

const routes: Routes = [
  {
    path: '',
    component: RepartidorPedidoEntregarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepartidorPedidoEntregarPageRoutingModule {}
