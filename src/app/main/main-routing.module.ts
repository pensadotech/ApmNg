import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Add here import for other components,

  { path: 'demo', loadChildren: () => import('./demo/demo.module').then((m) => m.DemoModule) },
  { path: 'demofx', loadChildren: () => import('./demofx/demofx.module').then((m) => m.DemofxModule) },
  { path: 'demodlg', loadChildren: () => import('./demodlg/demodlg.module').then((m) => m.DemodlgModule) },

 { path: 'products', loadChildren: () => import('./products/products.module').then((m) => m.ProductsModule)},

  // Home path is redundant, as 'home' will redirect to home anyway
  { path: 'home', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) },

  // default behavior
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
