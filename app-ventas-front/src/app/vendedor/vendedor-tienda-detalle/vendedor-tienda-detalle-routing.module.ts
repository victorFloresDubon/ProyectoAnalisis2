import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendedorTiendaDetallePage } from './vendedor-tienda-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: VendedorTiendaDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendedorTiendaDetallePageRoutingModule {}
