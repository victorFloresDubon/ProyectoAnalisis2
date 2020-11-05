import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendedorPedidoEditarPage } from './vendedor-pedido-editar.page';

const routes: Routes = [
  {
    path: '',
    component: VendedorPedidoEditarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendedorPedidoEditarPageRoutingModule {}
