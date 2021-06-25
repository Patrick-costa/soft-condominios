import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualizarVisitantePage } from './visualizar-visitante.page';

const routes: Routes = [
  {
    path: '',
    component: VisualizarVisitantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualizarVisitantePageRoutingModule {}
