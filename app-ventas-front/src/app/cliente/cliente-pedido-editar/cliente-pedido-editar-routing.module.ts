import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientePedidoEditarPage } from './cliente-pedido-editar.page';

const routes: Routes = [
  {
    path: '',
    component: ClientePedidoEditarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientePedidoEditarPageRoutingModule {}
