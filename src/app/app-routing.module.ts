import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutenticacaoGuard } from './core/guards/autenticacao.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder',
    loadChildren: () => import('./pages/folder/folder.module').then( m => m.FolderPageModule),  canActivate:[AutenticacaoGuard]
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
  {
    path: 'visualizar-doc',
    loadChildren: () => import('./pages/visualizar-doc/visualizar-doc.module').then( m => m.VisualizarDocPageModule)
  },
  {
    path: 'visualizar-visitante',
    loadChildren: () => import('./pages/visualizar-visitante/visualizar-visitante.module').then( m => m.VisualizarVisitantePageModule)
  },
  {
    path: 'visualizar-ocorrencia',
    loadChildren: () => import('./pages/visualizar-ocorrencia/visualizar-ocorrencia.module').then( m => m.VisualizarOcorrenciaPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'cad-encomenda',
    loadChildren: () => import('./pages/cad-encomenda/cad-encomenda.module').then( m => m.CadEncomendaPageModule)
  },
  {
    path: 'cad-informativo',
    loadChildren: () => import('./pages/cad-informativo/cad-informativo.module').then( m => m.CadInformativoPageModule)
  },  {
    path: 'visualizar-encomenda',
    loadChildren: () => import('./pages/visualizar-encomenda/visualizar-encomenda.module').then( m => m.VisualizarEncomendaPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
