import {Condominio} from "./condominio";
import {GrupoPermissao} from "./grupoPermissao";
import { Noticacao } from './notificacao';

export class Usuario{

    id: number;
    login: string
    senha: string
    status: string
    linkFoto: string
    notificacao: Noticacao
    grupoPermissao: GrupoPermissao
    
}