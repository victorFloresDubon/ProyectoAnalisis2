import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteProductoAgregarPage } from './cliente-producto-agregar.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteProductoAgregarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteProductoAgregarPageRoutingModule {}
