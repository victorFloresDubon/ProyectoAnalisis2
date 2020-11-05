import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendedorProductoAgregarPageRoutingModule } from './vendedor-producto-agregar-routing.module';

import { VendedorProductoAgregarPage } from './vendedor-producto-agregar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendedorProductoAgregarPageRoutingModule
  ],
  declarations: [VendedorProductoAgregarPage]
})
export class VendedorProductoAgregarPageModule {}
