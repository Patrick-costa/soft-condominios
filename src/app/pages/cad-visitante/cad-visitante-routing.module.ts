import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadVisitantePage } from './cad-visitante.page';

const routes: Routes = [
  {
    path: '',
    component: CadVisitantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadVisitantePageRoutingModule {}
