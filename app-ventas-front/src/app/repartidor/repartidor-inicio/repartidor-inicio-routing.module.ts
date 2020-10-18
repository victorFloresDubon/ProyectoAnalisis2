import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepartidorInicioPage } from './repartidor-inicio.page';

const routes: Routes = [
  {
    path: '',
    component: RepartidorInicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepartidorInicioPageRoutingModule {}
