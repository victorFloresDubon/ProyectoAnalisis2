import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendedorTiendaEditarPageRoutingModule } from './vendedor-tienda-editar-routing.module';

import { VendedorTiendaEditarPage } from './vendedor-tienda-editar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendedorTiendaEditarPageRoutingModule
  ],
  declarations: [VendedorTiendaEditarPage]
})
export class VendedorTiendaEditarPageModule {}
