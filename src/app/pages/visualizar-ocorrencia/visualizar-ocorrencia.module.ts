import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualizarOcorrenciaPageRoutingModule } from './visualizar-ocorrencia-routing.module';

import { VisualizarOcorrenciaPage } from './visualizar-ocorrencia.page';
import { MaterialDesignModule } from 'src/app/share/material-design/material-design.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialDesignModule,
    IonicModule,
    VisualizarOcorrenciaPageRoutingModule
  ],
  declarations: [VisualizarOcorrenciaPage]
})
export class VisualizarOcorrenciaPageModule {}
