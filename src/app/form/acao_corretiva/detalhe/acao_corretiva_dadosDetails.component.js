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
var Acao_corretiva_1 = require('../../../modelo/Acao_corretiva');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Acao_corretivaDadosDetailsComponent = (function () {
    function Acao_corretivaDadosDetailsComponent(route, pesquisaService) {
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Acao_corretivaDadosDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.acao_corretiva.Acao_corretiva"; var id = +params['id']; _this.acao_corretiva = new Acao_corretiva_1.Acao_corretiva(); _this.acao_corretiva.cd_acao_corretiva = id; o.objetoJson = _this.acao_corretiva; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Acao_corretivaDadosDetailsComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a acao_corretiva. ';
    } this.acao_corretiva = result; };
    Acao_corretivaDadosDetailsComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Acao_corretivaDadosDetailsComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'acao_corretiva-dados-details', templateUrl: 'acao_corretiva_dadosDetails.component.html' }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Acao_corretivaDadosDetailsComponent);
    return Acao_corretivaDadosDetailsComponent;
}());
exports.Acao_corretivaDadosDetailsComponent = Acao_corretivaDadosDetailsComponent;
//# sourceMappingURL=acao_corretiva_dadosDetails.component.js.map