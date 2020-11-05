import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendedorTiendaAgregarPageRoutingModule } from './vendedor-tienda-agregar-routing.module';

import { VendedorTiendaAgregarPage } from './vendedor-tienda-agregar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendedorTiendaAgregarPageRoutingModule
  ],
  declarations: [VendedorTiendaAgregarPage]
})
export class VendedorTiendaAgregarPageModule {}
