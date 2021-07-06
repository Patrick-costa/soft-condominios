import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadEncomendaPageRoutingModule } from './cad-encomenda-routing.module';

import { CadEncomendaPage } from './cad-encomenda.page';
import { MaterialDesignModule } from 'src/app/share/material-design/material-design.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialDesignModule,
    FormsModule,
    IonicModule,
    CadEncomendaPageRoutingModule
  ],
  declarations: [CadEncomendaPage]
})
export class CadEncomendaPageModule {}
