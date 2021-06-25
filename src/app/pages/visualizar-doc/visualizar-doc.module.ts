import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualizarDocPageRoutingModule } from './visualizar-doc-routing.module';

import { VisualizarDocPage } from './visualizar-doc.page';
import { MaterialDesignModule } from 'src/app/share/material-design/material-design.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialDesignModule,
    IonicModule,
    VisualizarDocPageRoutingModule
  ],
  declarations: [VisualizarDocPage]
})
export class VisualizarDocPageModule {}
