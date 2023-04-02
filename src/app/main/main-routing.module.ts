import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Add here import for other components,
  { path: 'products', loadChildren: () => import('./products/products.module').then((m) => m.ProductsModule)},
  { path: 'demo', loadChildren: () => import('./demo/demo.module').then((m) => m.DemoModule) },
  { path: 'demofx', loadChildren: () => import('./demofx/demofx.module').then((m) => m.DemofxModule) },

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
