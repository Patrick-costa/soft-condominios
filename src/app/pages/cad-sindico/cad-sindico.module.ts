import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadSindicoPageRoutingModule } from './cad-sindico-routing.module';

import { CadSindicoPage } from './cad-sindico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CadSindicoPageRoutingModule
  ],
  declarations: [CadSindicoPage]
})
export class CadSindicoPageModule {}
