import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadCondominioPageRoutingModule } from './cad-condominio-routing.module';

import { CadCondominioPage } from './cad-condominio.page';
import { NgxMaskIonicModule } from 'ngx-mask-ionic';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CadCondominioPageRoutingModule,
    NgxMaskIonicModule.forChild()
  ],
  declarations: [CadCondominioPage]
})
export class CadCondominioPageModule {}
