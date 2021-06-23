import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadSindicoPage } from './cad-sindico.page';

const routes: Routes = [
  {
    path: '',
    component: CadSindicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadSindicoPageRoutingModule {}
