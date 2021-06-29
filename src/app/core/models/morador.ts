import { Pessoa } from './pessoa';
import { Condominio } from './condominio';
import { Veiculo } from './veiculo';
import { Ocorrencia } from './ocorrencia';
import { AgendamentoMudanca } from './agendamentoMudanca';
import { Encomenda } from './encomenda';

export class Morador extends Pessoa{
    bloco: string
    apartamento: number
    condominio: Condominio
    veiculo: Veiculo
    reclamacao: Ocorrencia
    agendamentoMudanca: AgendamentoMudanca
    encomenda: Encomenda
}