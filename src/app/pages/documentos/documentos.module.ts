import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocumentosPageRoutingModule } from './documentos-routing.module';

import { DocumentosPage } from './documentos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DocumentosPageRoutingModule
  ],
  declarations: [DocumentosPage]
})
export class DocumentosPageModule {}
