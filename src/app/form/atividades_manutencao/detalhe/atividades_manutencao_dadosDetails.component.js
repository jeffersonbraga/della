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
var Atividades_manutencao_1 = require('../../../modelo/Atividades_manutencao');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Atividades_manutencaoDadosDetailsComponent = (function () {
    function Atividades_manutencaoDadosDetailsComponent(route, pesquisaService) {
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Atividades_manutencaoDadosDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.atividades_manutencao.Atividades_manutencao"; var id = +params['id']; _this.atividades_manutencao = new Atividades_manutencao_1.Atividades_manutencao(); _this.atividades_manutencao.cd_atividades_manutencao = id; o.objetoJson = _this.atividades_manutencao; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Atividades_manutencaoDadosDetailsComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a atividades_manutencao. ';
    } this.atividades_manutencao = result; };
    Atividades_manutencaoDadosDetailsComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Atividades_manutencaoDadosDetailsComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'atividades_manutencao-dados-details', templateUrl: 'atividades_manutencao_dadosDetails.component.html' }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Atividades_manutencaoDadosDetailsComponent);
    return Atividades_manutencaoDadosDetailsComponent;
}());
exports.Atividades_manutencaoDadosDetailsComponent = Atividades_manutencaoDadosDetailsComponent;
//# sourceMappingURL=atividades_manutencao_dadosDetails.component.js.map