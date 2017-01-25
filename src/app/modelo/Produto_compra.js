"use strict";
var Produto_compra = (function () {
    function Produto_compra() {
    }
    Produto_compra.prototype.clone = function () {
        var it = new Produto_compra();
        it.cd_produto_compra = this.cd_produto_compra;
        it.cd_produto = this.cd_produto;
        it.cd_compra = this.cd_compra;
        it.nr_quantidade = this.nr_quantidade;
        it.vl_produto_compra = this.vl_produto_compra;
        return it;
    };
    return Produto_compra;
}());
exports.Produto_compra = Produto_compra;
//# sourceMappingURL=Produto_compra.js.map