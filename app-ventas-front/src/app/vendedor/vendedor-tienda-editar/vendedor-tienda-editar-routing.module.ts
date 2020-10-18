import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendedorTiendaEditarPage } from './vendedor-tienda-editar.page';

const routes: Routes = [
  {
    path: '',
    component: VendedorTiendaEditarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendedorTiendaEditarPageRoutingModule {}
