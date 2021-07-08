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
    loadChildren: () => import('./pages/cad-sindico/cad-sindico.module').then( m => m.CadSindicoPageModule),  canActivate:[AutenticacaoGuard]
  },
  {
    path: 'cad-condominio',
    loadChildren: () => import('./pages/cad-condominio/cad-condominio.module').then( m => m.CadCondominioPageModule), 
  },
  {
    path: 'documentos',
    loadChildren: () => import('./pages/documentos/documentos.module').then( m => m.DocumentosPageModule),  canActivate:[AutenticacaoGuard]
  },
  {
    path: 'cad-reclamacoes',
    loadChildren: () => import('./pages/cad-reclamacoes/cad-reclamacoes.module').then( m => m.CadReclamacoesPageModule),  canActivate:[AutenticacaoGuard]
  },
  {
    path: 'livro',
    loadChildren: () => import('./pages/livro/livro.module').then( m => m.LivroPageModule),  canActivate:[AutenticacaoGuard]
  },
  {
    path: 'cad-visitante/:id',
    loadChildren: () => import('./pages/cad-visitante/cad-visitante.module').then( m => m.CadVisitantePageModule),  canActivate:[AutenticacaoGuard]
  },
  {
    path: 'visualizar-doc',
    loadChildren: () => import('./pages/visualizar-doc/visualizar-doc.module').then( m => m.VisualizarDocPageModule),  canActivate:[AutenticacaoGuard]
  },
  {
    path: 'visualizar-visitante/:id',
    loadChildren: () => import('./pages/visualizar-visitante/visualizar-visitante.module').then( m => m.VisualizarVisitantePageModule),  canActivate:[AutenticacaoGuard]
  },
  {
    path: 'visualizar-ocorrencia',
    loadChildren: () => import('./pages/visualizar-ocorrencia/visualizar-ocorrencia.module').then( m => m.VisualizarOcorrenciaPageModule),  canActivate:[AutenticacaoGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule),  canActivate:[AutenticacaoGuard]
  },
  {
    path: 'cad-encomenda/:id',
    loadChildren: () => import('./pages/cad-encomenda/cad-encomenda.module').then( m => m.CadEncomendaPageModule),  canActivate:[AutenticacaoGuard]
  },
  {
    path: 'cad-informativo',
    loadChildren: () => import('./pages/cad-informativo/cad-informativo.module').then( m => m.CadInformativoPageModule),  canActivate:[AutenticacaoGuard]
  },
  {
    path: 'visualizar-encomenda/:id',
    loadChildren: () => import('./pages/visualizar-encomenda/visualizar-encomenda.module').then( m => m.VisualizarEncomendaPageModule),  canActivate:[AutenticacaoGuard]
  },
  {
    path: 'mudanca',
    loadChildren: () => import('./pages/mudanca/mudanca.module').then( m => m.MudancaPageModule)
  },
  {
    path: 'visualizar-mudanca/:id',
    loadChildren: () => import('./pages/visualizar-mudanca/visualizar-mudanca.module').then( m => m.VisualizarMudancaPageModule)
  },
  {
    path: 'status-cad',
    loadChildren: () => import('./pages/status-cad/status-cad.module').then( m => m.StatusCadPageModule)
  },
  {
    path: 'cad-sugestao',
    loadChildren: () => import('./pages/cad-sugestao/cad-sugestao.module').then( m => m.CadSugestaoPageModule)
  },
  {
    path: 'visualizar-sugestao',
    loadChildren: () => import('./pages/visualizar-sugestao/visualizar-sugestao.module').then( m => m.VisualizarSugestaoPageModule)
  },
  {
    path: 'cad-colaborador',
    loadChildren: () => import('./pages/cad-colaborador/cad-colaborador.module').then( m => m.CadColaboradorPageModule)
  },
  {
    path: 'esqueci-senha',
    loadChildren: () => import('./pages/esqueci-senha/esqueci-senha.module').then( m => m.EsqueciSenhaPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
