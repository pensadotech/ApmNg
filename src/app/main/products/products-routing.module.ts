import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';

// missing products detail

const routes: Routes = [
  { path: '', component: ProductListComponent,  data: {title: 'Products'} },
  { path: ':id', component: ProductDetailComponent,  data: {title: 'Product Detail'} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
