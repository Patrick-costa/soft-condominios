import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadCondominioPage } from './cad-condominio.page';

const routes: Routes = [
  {
    path: '',
    component: CadCondominioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadCondominioPageRoutingModule {}
