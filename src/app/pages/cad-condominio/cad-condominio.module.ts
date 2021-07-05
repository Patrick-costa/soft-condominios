import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadCondominioPageRoutingModule } from './cad-condominio-routing.module';

import { CadCondominioPage } from './cad-condominio.page';
import { BrMaskerModule } from 'br-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrMaskerModule,
    ReactiveFormsModule,
    IonicModule,
    CadCondominioPageRoutingModule,
  ],
  declarations: [CadCondominioPage]
})
export class CadCondominioPageModule {}
