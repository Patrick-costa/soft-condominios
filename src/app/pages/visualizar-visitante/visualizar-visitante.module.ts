import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualizarVisitantePageRoutingModule } from './visualizar-visitante-routing.module';

import { VisualizarVisitantePage } from './visualizar-visitante.page';
import { MaterialDesignModule } from 'src/app/share/material-design/material-design.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialDesignModule,
    IonicModule,
    VisualizarVisitantePageRoutingModule
  ],
  declarations: [VisualizarVisitantePage]
})
export class VisualizarVisitantePageModule {}
