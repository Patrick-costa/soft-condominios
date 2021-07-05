import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadSindicoPageRoutingModule } from './cad-sindico-routing.module';

import { CadSindicoPage } from './cad-sindico.page';

import { BrMaskerModule } from 'br-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrMaskerModule,
    ReactiveFormsModule,
    IonicModule,
    CadSindicoPageRoutingModule
  ],
  declarations: [CadSindicoPage]
})
export class CadSindicoPageModule {}
