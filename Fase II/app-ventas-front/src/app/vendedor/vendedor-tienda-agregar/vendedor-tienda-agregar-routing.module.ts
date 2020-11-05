import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendedorTiendaAgregarPage } from './vendedor-tienda-agregar.page';

const routes: Routes = [
  {
    path: '',
    component: VendedorTiendaAgregarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendedorTiendaAgregarPageRoutingModule {}
