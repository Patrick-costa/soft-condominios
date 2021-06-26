import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadEncomendaPage } from './cad-encomenda.page';

const routes: Routes = [
  {
    path: '',
    component: CadEncomendaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadEncomendaPageRoutingModule {}
