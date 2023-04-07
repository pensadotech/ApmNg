import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DemofxRoutingModule } from './demofx-routing.module';
import { DemofxComponent } from './demofx.component';

@NgModule({
  declarations: [
    DemofxComponent
  ],
  imports: [
    CommonModule,
    DemofxRoutingModule,
    FlexLayoutModule
  ]
})
export class DemofxModule { }
