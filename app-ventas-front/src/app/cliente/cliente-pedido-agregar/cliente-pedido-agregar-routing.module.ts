import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientePedidoAgregarPage } from './cliente-pedido-agregar.page';

const routes: Routes = [
  {
    path: '',
    component: ClientePedidoAgregarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientePedidoAgregarPageRoutingModule {}
