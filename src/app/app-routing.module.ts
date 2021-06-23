import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder',
    pathMatch: 'full'
  },
  {
    path: 'folder',
    loadChildren: () => import('./pages/folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pages/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'cad-sindico',
    loadChildren: () => import('./pages/cad-sindico/cad-sindico.module').then( m => m.CadSindicoPageModule)
  },
  {
    path: 'cad-condominio',
    loadChildren: () => import('./pages/cad-condominio/cad-condominio.module').then( m => m.CadCondominioPageModule)
  },
  {
    path: 'documentos',
    loadChildren: () => import('./pages/documentos/documentos.module').then( m => m.DocumentosPageModule)
  },
  {
    path: 'cad-reclamacoes',
    loadChildren: () => import('./pages/cad-reclamacoes/cad-reclamacoes.module').then( m => m.CadReclamacoesPageModule)
  },
  {
    path: 'livro',
    loadChildren: () => import('./pages/livro/livro.module').then( m => m.LivroPageModule)
  },
  {
    path: 'cad-visitante',
    loadChildren: () => import('./pages/cad-visitante/cad-visitante.module').then( m => m.CadVisitantePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
