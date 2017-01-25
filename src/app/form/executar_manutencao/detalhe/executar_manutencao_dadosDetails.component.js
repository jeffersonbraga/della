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
var Executar_manutencao_1 = require('../../../modelo/Executar_manutencao');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Executar_manutencaoDadosDetailsComponent = (function () {
    function Executar_manutencaoDadosDetailsComponent(route, pesquisaService) {
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Executar_manutencaoDadosDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.executar_manutencao.Executar_manutencao"; var id = +params['id']; _this.executar_manutencao = new Executar_manutencao_1.Executar_manutencao(); _this.executar_manutencao.cd_executar_manutencao = id; o.objetoJson = _this.executar_manutencao; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Executar_manutencaoDadosDetailsComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a executar_manutencao. ';
    } this.executar_manutencao = result; };
    Executar_manutencaoDadosDetailsComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Executar_manutencaoDadosDetailsComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'executar_manutencao-dados-details', templateUrl: 'executar_manutencao_dadosDetails.component.html' }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Executar_manutencaoDadosDetailsComponent);
    return Executar_manutencaoDadosDetailsComponent;
}());
exports.Executar_manutencaoDadosDetailsComponent = Executar_manutencaoDadosDetailsComponent;
//# sourceMappingURL=executar_manutencao_dadosDetails.component.js.map