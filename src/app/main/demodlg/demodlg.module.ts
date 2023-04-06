import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemodlgRoutingModule } from './demodlg-routing.module';
import { DemodlgComponent,DialogOverviewExampleDialog } from './demodlg.component';

// for dialog
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    DemodlgComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    CommonModule,
    DemodlgRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSlideToggleModule
  ]
})
export class DemodlgModule { }
