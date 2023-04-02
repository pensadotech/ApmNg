import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StarComponent } from './star.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { TagLabelComponent } from './tag-label.component';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    StarComponent,
    TagLabelComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    FlexLayoutModule,
    MatChipsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    StarComponent,
    TagLabelComponent
  ]
})
export class SharedModule { }
