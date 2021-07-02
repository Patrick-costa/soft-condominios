import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadColaboradorPage } from './cad-colaborador.page';

const routes: Routes = [
  {
    path: '',
    component: CadColaboradorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadColaboradorPageRoutingModule {}
