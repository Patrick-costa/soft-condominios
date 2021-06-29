import { Mensagem } from './mensagem';

export class Ocorrencia{
    id: number
    titulo: string
    descricao: Text
    dataInicio: Date
    dataConcluido: Date
    linkArquivo: string
    autor: string
    status: string
    tipo: string
    mensagem: Mensagem
}