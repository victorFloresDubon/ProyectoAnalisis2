import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendedorTiendaPage } from './vendedor-tienda.page';

const routes: Routes = [
  {
    path: '',
    component: VendedorTiendaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendedorTiendaPageRoutingModule {}
