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
var Produto_servico_1 = require('../../../modelo/Produto_servico');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var crud_service_1 = require('../../../core/services/crud/crud.service');
var ServicoDadosProdutosComponent = (function () {
    function ServicoDadosProdutosComponent(router, route, pesquisaService, crudService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
        this.crudService = crudService;
    }
    ServicoDadosProdutosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) {
            var o = new ObjetoVirtual_1.ObjetoVirtual();
            o.classeJava = "br.com.primum.modelo.produto_servico.Produto_servico";
            var id = +params['id'];
            _this.produto_servico = new Produto_servico_1.Produto_servico();
            if (id > -1) {
                _this.produto_servico.cd_servico = id;
                o.objetoJson = _this.produto_servico;
                _this.pesquisaService.efetuarPesquisa(o)
                    .subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
            }
        });
    };
    ServicoDadosProdutosComponent.prototype.onEfetuarPesquisa = function (result) {
        if (!result) {
            this.errorMessage = 'Houve um erro ao pesquisar os itens do serviço.';
        }
        this.produto_servico = result;
    };
    ServicoDadosProdutosComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    ServicoDadosProdutosComponent.prototype.addItemLista = function (event) {
        var o = new ObjetoVirtual_1.ObjetoVirtual();
        o.classeJava = "br.com.primum.modelo.produto_servico.Produto_servico";
        o.objetoJson = this.produto_servico;
        /*this.crudService.salvarObjetoCompleto(o)
        .subscribe(
        result => this.onSalvarObjeto(result),
        error =>  this.errorMessage = <any>error);*/
        var it = new Produto_servico_1.Produto_servico();
        it.cd_produto_servico = this.produto_servico.cd_produto_servico;
        it.cd_produto = this.produto_servico.cd_produto;
        it.cd_servico = this.produto_servico.cd_servico;
        it.nr_quantidade = this.produto_servico.nr_quantidade;
        it.vl_unitario = this.produto_servico.vl_unitario;
        this.listaProdutoServico.push(it);
        this.produto_servico = new Produto_servico_1.Produto_servico();
    };
    ServicoDadosProdutosComponent.prototype.onCancel = function (event) {
        event.preventDefault();
        //this.router.navigate(['/']);   
    };
    ServicoDadosProdutosComponent.prototype.onSalvarObjeto = function (result) {
        if (!result) {
            this.errorMessage = 'Houve um erro ao salvar itens do serviço. ';
        }
        event.preventDefault();
        //this.router.navigate(['/dados-compra/']); 
    };
    ServicoDadosProdutosComponent.prototype.btnExcluirClickHandler = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) {
            var o = new ObjetoVirtual_1.ObjetoVirtual();
            o.classeJava = "br.com.primum.modelo.produto_servico.Produto_servico";
            o.objetoJson = _this.produto_servico;
            _this.crudService.excluirObjetoCompleto(o)
                .subscribe(function (result) { return _this.onExcluirObjeto(result); }, function (error) { return _this.errorMessage = error; });
        });
    };
    ServicoDadosProdutosComponent.prototype.onExcluirObjeto = function (result) {
        if (!result) {
            this.errorMessage = 'Houve um erro ao remover itens do serviço. ';
        }
        event.preventDefault();
        //this.router.navigate(['/dados-compra/']); 
    };
    ServicoDadosProdutosComponent.prototype.btnCancelarClickHandler = function (event) {
    };
    ServicoDadosProdutosComponent.prototype.btnNovoClickHandler = function (event) {
    };
    __decorate([
        core_1.Input("lista-dados"), 
        __metadata('design:type', Array)
    ], ServicoDadosProdutosComponent.prototype, "listaProdutoServico", void 0);
    ServicoDadosProdutosComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'servico-dados-produtos',
            templateUrl: 'servico_dadosProdutos.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService, crud_service_1.CrudService])
    ], ServicoDadosProdutosComponent);
    return ServicoDadosProdutosComponent;
}());
exports.ServicoDadosProdutosComponent = ServicoDadosProdutosComponent;
//# sourceMappingURL=servico_dadosProdutos.component.js.map