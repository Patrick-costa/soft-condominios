import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualizarOcorrenciaPage } from './visualizar-ocorrencia.page';

const routes: Routes = [
  {
    path: '',
    component: VisualizarOcorrenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualizarOcorrenciaPageRoutingModule {}
