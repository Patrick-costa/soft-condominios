import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualizarEncomendaPageRoutingModule } from './visualizar-encomenda-routing.module';

import { VisualizarEncomendaPage } from './visualizar-encomenda.page';
import { MaterialDesignModule } from 'src/app/share/material-design/material-design.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialDesignModule,
    IonicModule,
    VisualizarEncomendaPageRoutingModule
  ],
  declarations: [VisualizarEncomendaPage]
})
export class VisualizarEncomendaPageModule {}
