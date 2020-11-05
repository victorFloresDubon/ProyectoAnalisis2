import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteProductoDetallePage } from './cliente-producto-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteProductoDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteProductoDetallePageRoutingModule {}
