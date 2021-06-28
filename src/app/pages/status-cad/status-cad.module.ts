import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatusCadPageRoutingModule } from './status-cad-routing.module';

import { StatusCadPage } from './status-cad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatusCadPageRoutingModule
  ],
  declarations: [StatusCadPage]
})
export class StatusCadPageModule {}
