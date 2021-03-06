import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadReclamacoesPageRoutingModule } from './cad-reclamacoes-routing.module';

import { CadReclamacoesPage } from './cad-reclamacoes.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    CadReclamacoesPageRoutingModule
  ],
  declarations: [CadReclamacoesPage]
})
export class CadReclamacoesPageModule {}
