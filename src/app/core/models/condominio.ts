import {Bairro} from "./bairro";

export class Condominio{
    id: number 
    rua: string
    numero: string
    bairro: Bairro
    nomeFantasia: string
    cnpj: string
    linkContratoSocial: string
    razaoSocial: string
}