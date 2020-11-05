import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteProductoAgregarPageRoutingModule } from './cliente-producto-agregar-routing.module';

import { ClienteProductoAgregarPage } from './cliente-producto-agregar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteProductoAgregarPageRoutingModule
  ],
  declarations: [ClienteProductoAgregarPage]
})
export class ClienteProductoAgregarPageModule {}
