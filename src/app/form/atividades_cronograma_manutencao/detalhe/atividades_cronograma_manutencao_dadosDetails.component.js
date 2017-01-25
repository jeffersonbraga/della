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
var Atividades_cronograma_manutencao_1 = require('../../../modelo/Atividades_cronograma_manutencao');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Atividades_cronograma_manutencaoDadosDetailsComponent = (function () {
    function Atividades_cronograma_manutencaoDadosDetailsComponent(route, pesquisaService) {
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Atividades_cronograma_manutencaoDadosDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.atividades_cronograma_manutencao.Atividades_cronograma_manutencao"; var id = +params['id']; _this.atividades_cronograma_manutencao = new Atividades_cronograma_manutencao_1.Atividades_cronograma_manutencao(); _this.atividades_cronograma_manutencao.cd_atividades_cronograma_manutencao = id; o.objetoJson = _this.atividades_cronograma_manutencao; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Atividades_cronograma_manutencaoDadosDetailsComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a atividades_cronograma_manutencao. ';
    } this.atividades_cronograma_manutencao = result; };
    Atividades_cronograma_manutencaoDadosDetailsComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Atividades_cronograma_manutencaoDadosDetailsComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'atividades_cronograma_manutencao-dados-details', templateUrl: 'atividades_cronograma_manutencao_dadosDetails.component.html' }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Atividades_cronograma_manutencaoDadosDetailsComponent);
    return Atividades_cronograma_manutencaoDadosDetailsComponent;
}());
exports.Atividades_cronograma_manutencaoDadosDetailsComponent = Atividades_cronograma_manutencaoDadosDetailsComponent;
//# sourceMappingURL=atividades_cronograma_manutencao_dadosDetails.component.js.map