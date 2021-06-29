import {Bairro} from "./bairro";

export class Condominio{
    id: number 
    cep: number
    rua: string
    numero: number
    bairro: Bairro
    nomeFantasia: string
    cnpj: string
    linkContratoSocial: string
    razaoSocial: string
}