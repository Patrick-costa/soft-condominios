import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadVisitantePageRoutingModule } from './cad-visitante-routing.module';

import { CadVisitantePage } from './cad-visitante.page';

import { BrMaskerModule } from 'br-mask';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrMaskerModule,
    FormsModule,
    IonicModule,
    CadVisitantePageRoutingModule
  ],
  declarations: [CadVisitantePage]
})
export class CadVisitantePageModule {}
