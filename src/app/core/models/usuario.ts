import {Condominio} from "./condominio";
import {GrupoPermissao} from "./grupoPermissao";

export class Usuario{

    id: number;
    nome: string;
    sobrenome: string;
    Email: string;
    senha: string;
    cpf: string;
    condominio: Condominio
    grupoPermissao: GrupoPermissao
    
}