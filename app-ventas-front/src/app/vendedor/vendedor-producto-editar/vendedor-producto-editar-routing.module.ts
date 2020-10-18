import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendedorProductoEditarPage } from './vendedor-producto-editar.page';

const routes: Routes = [
  {
    path: '',
    component: VendedorProductoEditarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendedorProductoEditarPageRoutingModule {}
