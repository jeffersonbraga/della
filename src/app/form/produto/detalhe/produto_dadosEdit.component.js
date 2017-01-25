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
var Produto_1 = require('../../../modelo/Produto');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var crud_service_1 = require('../../../core/services/crud/crud.service');
var ProdutoDadosEditComponent = (function () {
    function ProdutoDadosEditComponent(router, route, pesquisaService, crudService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
        this.crudService = crudService;
    }
    ProdutoDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) {
            var o = new ObjetoVirtual_1.ObjetoVirtual();
            o.classeJava = "br.com.primum.modelo.produto.Produto";
            var id = +params['id'];
            _this.produto = new Produto_1.Produto();
            if (id > -1) {
                _this.produto.cd_produto = id;
                o.objetoJson = _this.produto;
                _this.pesquisaService.efetuarPesquisa(o)
                    .subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
            }
        });
    };
    ProdutoDadosEditComponent.prototype.onEfetuarPesquisa = function (result) {
        if (!result) {
            this.errorMessage = 'Houve um erro ao pesquisar o produto. ';
        }
        this.produto = result;
    };
    ProdutoDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    ProdutoDadosEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) {
            var o = new ObjetoVirtual_1.ObjetoVirtual();
            o.classeJava = "br.com.primum.modelo.produto.Produto";
            o.objetoJson = _this.produto;
            _this.crudService.salvarObjetoCompleto(o)
                .subscribe(function (result) { return _this.onSalvarObjeto(result); }, function (error) { return _this.errorMessage = error; });
        });
    };
    ProdutoDadosEditComponent.prototype.onCancel = function (event) {
        event.preventDefault();
        this.router.navigate(['/']);
    };
    ProdutoDadosEditComponent.prototype.onSalvarObjeto = function (result) {
        if (!result) {
            this.errorMessage = 'Houve um erro ao pesquisar o produto. ';
        }
        event.preventDefault();
        this.router.navigate(['/dados-produto/']);
    };
    ProdutoDadosEditComponent.prototype.btnExcluirClickHandler = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) {
            var o = new ObjetoVirtual_1.ObjetoVirtual();
            o.classeJava = "br.com.primum.modelo.produto.Produto";
            o.objetoJson = _this.produto;
            _this.crudService.excluirObjetoCompleto(o)
                .subscribe(function (result) { return _this.onExcluirObjeto(result); }, function (error) { return _this.errorMessage = error; });
        });
    };
    ProdutoDadosEditComponent.prototype.onExcluirObjeto = function (result) {
        if (!result) {
            this.errorMessage = 'Houve um erro ao pesquisar o produto. ';
        }
        event.preventDefault();
        this.router.navigate(['/dados-produto/']);
    };
    ProdutoDadosEditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'produto-dados-edit',
            templateUrl: 'produto_dadosEdit.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService, crud_service_1.CrudService])
    ], ProdutoDadosEditComponent);
    return ProdutoDadosEditComponent;
}());
exports.ProdutoDadosEditComponent = ProdutoDadosEditComponent;
//# sourceMappingURL=produto_dadosEdit.component.js.map