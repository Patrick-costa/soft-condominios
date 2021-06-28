import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadSugestaoPageRoutingModule } from './cad-sugestao-routing.module';

import { CadSugestaoPage } from './cad-sugestao.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    CadSugestaoPageRoutingModule
  ],
  declarations: [CadSugestaoPage]
})
export class CadSugestaoPageModule {}
