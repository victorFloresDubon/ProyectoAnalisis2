import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ListarEmpleadoComponent } from './Empleado/listar-empleado/listar-empleado.component';
import { EditarEmpleadoComponent } from './Empleado/editar-empleado/editar-empleado.component';
import { AgregarEmpleadoComponent } from './Empleado/agregar-empleado/agregar-empleado.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {path:'editarEmpleado', component:EditarEmpleadoComponent},
  {path:'listarEmpleado', component:ListarEmpleadoComponent},
  {path:'agregarEmpleado', component:AgregarEmpleadoComponent},
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'vendedor-tienda',
        loadChildren: () => import('./vendedor/vendedor-tienda/vendedor-tienda.module').then( m => m.VendedorTiendaPageModule)
  },
  {
    path: 'vendedor-producto',
    loadChildren: () => import('./vendedor/vendedor-producto/vendedor-producto.module').then( m => m.VendedorProductoPageModule)
  },
  {
    path: 'vendedor-inicio',
    loadChildren: () => import('./vendedor/vendedor-inicio/vendedor-inicio.module').then( m => m.VendedorInicioPageModule)
  },
  {
    path: 'vendedor-tienda-detalle',
    loadChildren: () => import('./vendedor/vendedor-tienda-detalle/vendedor-tienda-detalle.module').then( m => m.VendedorTiendaDetallePageModule)
  },
  {
    path: 'vendedor-tienda-editar',
    loadChildren: () => import('./vendedor/vendedor-tienda-editar/vendedor-tienda-editar.module').then( m => m.VendedorTiendaEditarPageModule)
  },
  {
    path: 'vendedor-producto-detalle',
    loadChildren: () => import('./vendedor/vendedor-producto-detalle/vendedor-producto-detalle.module').then( m => m.VendedorProductoDetallePageModule)
  },
  {
    path: 'vendedor-producto-editar',
    loadChildren: () => import('./vendedor/vendedor-producto-editar/vendedor-producto-editar.module').then( m => m.VendedorProductoEditarPageModule)
  },
  {
    path: 'vendedor-pedido',
    loadChildren: () => import('./vendedor/vendedor-pedido/vendedor-pedido.module').then( m => m.VendedorPedidoPageModule)
  },
  {
    path: 'repartidor-inicio',
    loadChildren: () => import('./repartidor/repartidor-inicio/repartidor-inicio.module').then( m => m.RepartidorInicioPageModule)
  },
  {
    path: 'repartidor-pedido',
    loadChildren: () => import('./repartidor/repartidor-pedido/repartidor-pedido.module').then( m => m.RepartidorPedidoPageModule)
  },
  {
    path: 'cliente-inicio',
    loadChildren: () => import('./cliente/cliente-inicio/cliente-inicio.module').then( m => m.ClienteInicioPageModule)
  },
  {
    path: 'cliente-pedido',
    loadChildren: () => import('./cliente/cliente-pedido/cliente-pedido.module').then( m => m.ClientePedidoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
