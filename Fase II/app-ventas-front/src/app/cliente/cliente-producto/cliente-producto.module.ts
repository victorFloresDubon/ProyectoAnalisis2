import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteProductoPageRoutingModule } from './cliente-producto-routing.module';

import { ClienteProductoPage } from './cliente-producto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteProductoPageRoutingModule
  ],
  declarations: [ClienteProductoPage]
})
export class ClienteProductoPageModule {}
