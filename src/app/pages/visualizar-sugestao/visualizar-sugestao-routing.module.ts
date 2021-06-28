import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualizarSugestaoPage } from './visualizar-sugestao.page';

const routes: Routes = [
  {
    path: '',
    component: VisualizarSugestaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualizarSugestaoPageRoutingModule {}
