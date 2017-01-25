import { Produto_servico } from './Produto_servico';

export class Servico {

    cd_servico : number;
    cd_pessoa : number;
    cd_veiculo : number;
    dt_inicio : string;
    dt_termino : string;
    ds_servico : string;
    vl_total : number;
    listaProdutos_servico : Produto_servico[] = [];
}