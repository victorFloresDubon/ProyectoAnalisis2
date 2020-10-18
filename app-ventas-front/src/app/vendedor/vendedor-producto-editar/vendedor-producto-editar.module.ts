import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendedorProductoEditarPageRoutingModule } from './vendedor-producto-editar-routing.module';

import { VendedorProductoEditarPage } from './vendedor-producto-editar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendedorProductoEditarPageRoutingModule
  ],
  declarations: [VendedorProductoEditarPage]
})
export class VendedorProductoEditarPageModule {}
