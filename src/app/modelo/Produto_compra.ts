export class Produto_compra {

    cd_produto_compra : number;
    cd_produto : number;
    cd_compra : number;
    nr_quantidade : number;
    vl_produto_compra : number;

    public clone() : Produto_compra {
        let it : Produto_compra = new Produto_compra();
        it.cd_produto_compra    = this.cd_produto_compra;
        it.cd_produto           = this.cd_produto;
        it.cd_compra            = this.cd_compra;
        it.nr_quantidade        = this.nr_quantidade;
        it.vl_produto_compra    = this.vl_produto_compra;

        return it;
    }
}