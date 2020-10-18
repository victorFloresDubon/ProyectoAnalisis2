import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuVendedorComponent } from '../../components/menu-vendedor/menu-vendedor.component';
import { IonicModule } from '@ionic/angular';

import { VendedorInicioPageRoutingModule } from './vendedor-inicio-routing.module';

import { VendedorInicioPage } from './vendedor-inicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendedorInicioPageRoutingModule
  ],
  exports: [
    MenuVendedorComponent
  ],
  declarations: [
    VendedorInicioPage,
    MenuVendedorComponent
  ]
})
export class VendedorInicioPageModule {}
