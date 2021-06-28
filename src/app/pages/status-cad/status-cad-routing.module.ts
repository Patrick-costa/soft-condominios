import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatusCadPage } from './status-cad.page';

const routes: Routes = [
  {
    path: '',
    component: StatusCadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatusCadPageRoutingModule {}
