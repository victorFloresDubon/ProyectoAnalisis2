import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendedorPedidoPage } from './vendedor-pedido.page';

const routes: Routes = [
  {
    path: '',
    component: VendedorPedidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendedorPedidoPageRoutingModule {}
