import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadSugestaoPage } from './cad-sugestao.page';

const routes: Routes = [
  {
    path: '',
    component: CadSugestaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadSugestaoPageRoutingModule {}
