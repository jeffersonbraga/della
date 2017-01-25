"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var Produto_compra_1 = require('../../../modelo/Produto_compra');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var crud_service_1 = require('../../../core/services/crud/crud.service');
var CompraDadosProdutosComponent = (function () {
    function CompraDadosProdutosComponent(router, route, pesquisaService, crudService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
        this.crudService = crudService;
    }
    CompraDadosProdutosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) {
            var o = new ObjetoVirtual_1.ObjetoVirtual();
            o.classeJava = "br.com.primum.modelo.produto_compra.Produto_compra";
            var id = +params['id'];
            _this.produto_compra = new Produto_compra_1.Produto_compra();
            if (id > -1) {
                _this.produto_compra.cd_compra = id;
                o.objetoJson = _this.produto_compra;
                _this.pesquisaService.efetuarPesquisa(o)
                    .subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
            }
        });
    };
    CompraDadosProdutosComponent.prototype.onEfetuarPesquisa = function (result) {
        if (!result) {
            this.errorMessage = 'Houve um erro ao pesquisaR a compra. ';
        }
        this.produto_compra = result;
    };
    CompraDadosProdutosComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    CompraDadosProdutosComponent.prototype.addItemLista = function (event) {
        var o = new ObjetoVirtual_1.ObjetoVirtual();
        o.classeJava = "br.com.primum.modelo.produto_compra.Produto_compra";
        o.objetoJson = this.produto_compra;
        /*this.crudService.salvarObjetoCompleto(o)
        .subscribe(
        result => this.onSalvarObjeto(result),
        error =>  this.errorMessage = <any>error);*/
        var it = new Produto_compra_1.Produto_compra();
        it.cd_produto_compra = this.produto_compra.cd_produto_compra;
        it.cd_produto = this.produto_compra.cd_produto;
        it.cd_compra = this.produto_compra.cd_compra;
        it.nr_quantidade = this.produto_compra.nr_quantidade;
        it.vl_produto_compra = this.produto_compra.vl_produto_compra;
        this.listaProdutoCompra.push(it);
        //this.produto_compra = new Produto_compra();
    };
    CompraDadosProdutosComponent.prototype.onCancel = function (event) {
        event.preventDefault();
        //this.router.navigate(['/']);   
    };
    CompraDadosProdutosComponent.prototype.onSalvarObjeto = function (result) {
        if (!result) {
            this.errorMessage = 'Houve um erro ao pesquisar a compra. ';
        }
        event.preventDefault();
        //this.router.navigate(['/dados-compra/']); 
    };
    CompraDadosProdutosComponent.prototype.btnExcluirClickHandler = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) {
            var o = new ObjetoVirtual_1.ObjetoVirtual();
            o.classeJava = "br.com.primum.modelo.produto_compra.Produto_compra";
            o.objetoJson = _this.produto_compra;
            _this.crudService.excluirObjetoCompleto(o)
                .subscribe(function (result) { return _this.onExcluirObjeto(result); }, function (error) { return _this.errorMessage = error; });
        });
    };
    CompraDadosProdutosComponent.prototype.onExcluirObjeto = function (result) {
        if (!result) {
            this.errorMessage = 'Houve um erro ao pesquisar a compra. ';
        }
        event.preventDefault();
        //this.router.navigate(['/dados-compra/']); 
    };
    CompraDadosProdutosComponent.prototype.btnCancelarClickHandler = function (event) {
    };
    CompraDadosProdutosComponent.prototype.btnNovoClickHandler = function (event) {
    };
    __decorate([
        core_1.Input("lista-dados"), 
        __metadata('design:type', Array)
    ], CompraDadosProdutosComponent.prototype, "listaProdutoCompra", void 0);
    CompraDadosProdutosComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'compra-dados-produtos',
            templateUrl: 'compra_dadosProdutos.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService, crud_service_1.CrudService])
    ], CompraDadosProdutosComponent);
    return CompraDadosProdutosComponent;
}());
exports.CompraDadosProdutosComponent = CompraDadosProdutosComponent;
//# sourceMappingURL=compra_dadosProdutos.component.js.map