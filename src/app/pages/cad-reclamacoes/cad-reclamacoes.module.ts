import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadReclamacoesPageRoutingModule } from './cad-reclamacoes-routing.module';

import { CadReclamacoesPage } from './cad-reclamacoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadReclamacoesPageRoutingModule
  ],
  declarations: [CadReclamacoesPage]
})
export class CadReclamacoesPageModule {}
