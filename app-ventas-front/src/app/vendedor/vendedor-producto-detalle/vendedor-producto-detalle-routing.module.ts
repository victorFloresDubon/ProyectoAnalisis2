import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendedorProductoDetallePage } from './vendedor-producto-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: VendedorProductoDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendedorProductoDetallePageRoutingModule {}
