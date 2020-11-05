import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteProductoPage } from './cliente-producto.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteProductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteProductoPageRoutingModule {}
