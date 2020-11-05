import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientePedidoDetallePage } from './cliente-pedido-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: ClientePedidoDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientePedidoDetallePageRoutingModule {}
