import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendedorProductoAgregarPage } from './vendedor-producto-agregar.page';

const routes: Routes = [
  {
    path: '',
    component: VendedorProductoAgregarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendedorProductoAgregarPageRoutingModule {}
