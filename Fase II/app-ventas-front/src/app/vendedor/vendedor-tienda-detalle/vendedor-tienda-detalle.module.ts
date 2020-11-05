import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendedorTiendaDetallePageRoutingModule } from './vendedor-tienda-detalle-routing.module';

import { VendedorTiendaDetallePage } from './vendedor-tienda-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendedorTiendaDetallePageRoutingModule
  ],
  declarations: [VendedorTiendaDetallePage]
})
export class VendedorTiendaDetallePageModule {}
