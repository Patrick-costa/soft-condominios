import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualizarEncomendaPageRoutingModule } from './visualizar-encomenda-routing.module';

import { VisualizarEncomendaPage } from './visualizar-encomenda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisualizarEncomendaPageRoutingModule
  ],
  declarations: [VisualizarEncomendaPage]
})
export class VisualizarEncomendaPageModule {}
