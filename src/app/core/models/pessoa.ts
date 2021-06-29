import { Usuario } from './usuario';
import { Ocorrencia } from './ocorrencia';

export class Pessoa{
    id: number;
    nome: string;
    sobrenome: string;
    email: string
    cpf: string;
    status: string;
    ocorrencia: Ocorrencia;
    usuario: Usuario;
}