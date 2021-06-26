import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadInformativoPage } from './cad-informativo.page';

const routes: Routes = [
  {
    path: '',
    component: CadInformativoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadInformativoPageRoutingModule {}
