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
var Produto_compraDadosDetailsComponent = (function () {
    function Produto_compraDadosDetailsComponent(route, pesquisaService) {
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Produto_compraDadosDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.produto_compra.Produto_compra"; var id = +params['id']; _this.produto_compra = new Produto_compra_1.Produto_compra(); _this.produto_compra.cd_produto_compra = id; o.objetoJson = _this.produto_compra; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Produto_compraDadosDetailsComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a produto_compra. ';
    } this.produto_compra = result; };
    Produto_compraDadosDetailsComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Produto_compraDadosDetailsComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'produto_compra-dados-details', templateUrl: 'produto_compra_dadosDetails.component.html' }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Produto_compraDadosDetailsComponent);
    return Produto_compraDadosDetailsComponent;
}());
exports.Produto_compraDadosDetailsComponent = Produto_compraDadosDetailsComponent;
//# sourceMappingURL=produto_compra_dadosDetails.component.js.map