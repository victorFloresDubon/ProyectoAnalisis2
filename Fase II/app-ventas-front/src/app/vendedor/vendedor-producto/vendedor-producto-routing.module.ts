import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendedorProductoPage } from './vendedor-producto.page';

const routes: Routes = [
  {
    path: '',
    component: VendedorProductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendedorProductoPageRoutingModule {}
