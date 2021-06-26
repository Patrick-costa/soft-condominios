import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualizarEncomendaPage } from './visualizar-encomenda.page';

const routes: Routes = [
  {
    path: '',
    component: VisualizarEncomendaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualizarEncomendaPageRoutingModule {}
