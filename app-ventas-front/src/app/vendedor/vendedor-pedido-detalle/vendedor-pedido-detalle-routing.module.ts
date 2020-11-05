import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendedorPedidoDetallePage } from './vendedor-pedido-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: VendedorPedidoDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendedorPedidoDetallePageRoutingModule {}
