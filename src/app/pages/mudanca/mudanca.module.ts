import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MudancaPageRoutingModule } from './mudanca-routing.module';

import { MudancaPage } from './mudanca.page';
import { MaterialDesignModule } from 'src/app/share/material-design/material-design.module';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MaterialDesignModule,
    IonicModule,
    MudancaPageRoutingModule
  ],
  providers: [MatDatepicker,],
  declarations: [MudancaPage]
})
export class MudancaPageModule {}
