import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendedorTiendaPageRoutingModule } from './vendedor-tienda-routing.module';

import { VendedorTiendaPage } from './vendedor-tienda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendedorTiendaPageRoutingModule
  ],
  exports: [
    
  ],
  declarations: [VendedorTiendaPage]
})
export class VendedorTiendaPageModule {}
