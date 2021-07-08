import { Condominio } from "./condominio"
import { Usuario } from "./usuario"

export class NewColaborador{
    cpf: string
    email: string
    funcao: string
    nome: string
    sobrenome: string
    status: string
    condominio: Condominio[]
    usuario: Usuario
}