import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualizarMudancaPage } from './visualizar-mudanca.page';

const routes: Routes = [
  {
    path: '',
    component: VisualizarMudancaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualizarMudancaPageRoutingModule {}
