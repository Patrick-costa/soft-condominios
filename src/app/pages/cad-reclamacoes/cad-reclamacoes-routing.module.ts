import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadReclamacoesPage } from './cad-reclamacoes.page';

const routes: Routes = [
  {
    path: '',
    component: CadReclamacoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadReclamacoesPageRoutingModule {}
