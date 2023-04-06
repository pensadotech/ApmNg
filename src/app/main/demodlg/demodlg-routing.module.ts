import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemodlgComponent } from './demodlg.component';

const routes: Routes = [
  { path: '**', component: DemodlgComponent, data: {title: 'Demo Dialog'} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemodlgRoutingModule { }
