import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualizarSugestaoPageRoutingModule } from './visualizar-sugestao-routing.module';

import { VisualizarSugestaoPage } from './visualizar-sugestao.page';
import { MaterialDesignModule } from '../../share/material-design/material-design.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialDesignModule,
    IonicModule,
    VisualizarSugestaoPageRoutingModule
  ],
  declarations: [VisualizarSugestaoPage]
})
export class VisualizarSugestaoPageModule {}
