import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteProductoDetallePageRoutingModule } from './cliente-producto-detalle-routing.module';

import { ClienteProductoDetallePage } from './cliente-producto-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteProductoDetallePageRoutingModule
  ],
  declarations: [ClienteProductoDetallePage]
})
export class ClienteProductoDetallePageModule {}
