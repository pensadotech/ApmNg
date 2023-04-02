import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DemofxComponent } from './demofx.component';

const routes: Routes = [
  { path: '**', component: DemofxComponent, data: {title: 'Demofx'} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemofxRoutingModule { }
