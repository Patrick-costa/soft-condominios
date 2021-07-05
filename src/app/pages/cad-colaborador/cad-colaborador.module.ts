import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadColaboradorPageRoutingModule } from './cad-colaborador-routing.module';

import { CadColaboradorPage } from './cad-colaborador.page';

import { BrMaskerModule } from 'br-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrMaskerModule,
    ReactiveFormsModule,
    IonicModule,
    CadColaboradorPageRoutingModule
  ],
  declarations: [CadColaboradorPage]
})
export class CadColaboradorPageModule {}
