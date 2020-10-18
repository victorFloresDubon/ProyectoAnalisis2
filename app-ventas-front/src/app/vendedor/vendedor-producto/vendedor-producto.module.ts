import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendedorProductoPageRoutingModule } from './vendedor-producto-routing.module';

import { VendedorProductoPage } from './vendedor-producto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendedorProductoPageRoutingModule
  ],
  declarations: [VendedorProductoPage]
})
export class VendedorProductoPageModule {}
