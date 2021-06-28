import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualizarMudancaPageRoutingModule } from './visualizar-mudanca-routing.module';

import { VisualizarMudancaPage } from './visualizar-mudanca.page';
import { MaterialDesignModule } from '../../share/material-design/material-design.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialDesignModule,
    IonicModule,
    VisualizarMudancaPageRoutingModule
  ],
  declarations: [VisualizarMudancaPage]
})
export class VisualizarMudancaPageModule {}
