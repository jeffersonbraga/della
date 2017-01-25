import { Produto_compra } from './Produto_compra';

export class Compra{

    cd_compra : number;
    cd_pessoa : number;
    nr_nota_fiscal : string;
    dt_compra : string;
    dt_entrada_produto : string;
    listaProdutos_compra : Produto_compra[] = [];
}