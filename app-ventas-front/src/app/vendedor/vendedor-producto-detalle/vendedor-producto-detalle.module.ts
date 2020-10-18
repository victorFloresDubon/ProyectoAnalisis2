import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendedorProductoDetallePageRoutingModule } from './vendedor-producto-detalle-routing.module';

import { VendedorProductoDetallePage } from './vendedor-producto-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendedorProductoDetallePageRoutingModule
  ],
  declarations: [VendedorProductoDetallePage]
})
export class VendedorProductoDetallePageModule {}
