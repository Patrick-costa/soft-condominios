import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadInformativoPageRoutingModule } from './cad-informativo-routing.module';

import { CadInformativoPage } from './cad-informativo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CadInformativoPageRoutingModule
  ],
  declarations: [CadInformativoPage]
})
export class CadInformativoPageModule {}
