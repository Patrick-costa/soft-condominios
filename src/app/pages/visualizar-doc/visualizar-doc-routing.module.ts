import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualizarDocPage } from './visualizar-doc.page';

const routes: Routes = [
  {
    path: '',
    component: VisualizarDocPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualizarDocPageRoutingModule {}
