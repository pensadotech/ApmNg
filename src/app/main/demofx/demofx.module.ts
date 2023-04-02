import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemofxRoutingModule } from './demofx-routing.module';
import { DemofxComponent } from './demofx.component';
import { FlexLayoutModule } from '@angular/flex-layout';

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
