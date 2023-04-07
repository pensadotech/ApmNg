# APMng

This project uses Debora Kurata's APM project, but uses routing lazy loading and SCSS instead.
Additionally, the project test adding a new 'main' folder to hold the components, as a way to set the
foundation for larger projects organization.

In this case, the app.module consumes child routes from main/main-routing.module.ts, in where all routes
are defined. However, main-routing.module.ts consume child routes under the products/product-routing.module.test

Additionally, the project offer components to demostrate some capabilities for angular.material,  fxFlex fxLayout, and handling a dialog box that passes back to caller a set of data, not just a single result.

## Lazy loading

ref: [https://angular.io/guide/lazy-loading-ngmodules]

For this project, the way the lazy loading for routes is defined as follows.

app-routing.modules.ts 
----------------------
const routes: Routes = [
  { path: '', loadChildren: () => import('./main/main.module').then(m => m.MainModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})


main-routing.module.ts
-------------------------
const routes: Routes = [
  { path: 'demo', loadChildren: () => import('./demo/demo.module').then((m) => m.DemoModule) },
  { path: 'demofx', loadChildren: () => import('./demofx/demofx.module').then((m) => m.DemofxModule) },
  { path: 'demodlg', loadChildren: () => import('./demodlg/demodlg.module').then((m) => m.DemodlgModule) },
  // producucts
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

product-routing.module.ts  
--------------------------
The reader must observe how the children path for the 'products' route are defined in comparison with a non-lazy loading approach, that will define the paths as 'products' and 'products/:id'.

const routes: Routes = [
  { path: '', component: ProductListComponent,  data: {title: 'Products'} },
  { path: ':id', component: ProductDetailComponent,  data: {title: 'Product Detail'} }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

--------------------------------------------------------------------------
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
