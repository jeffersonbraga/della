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
var Resolucao_ocorrencia_1 = require('../../../modelo/Resolucao_ocorrencia');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Resolucao_ocorrenciaDadosDetailsComponent = (function () {
    function Resolucao_ocorrenciaDadosDetailsComponent(route, pesquisaService) {
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Resolucao_ocorrenciaDadosDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.resolucao_ocorrencia.Resolucao_ocorrencia"; var id = +params['id']; _this.resolucao_ocorrencia = new Resolucao_ocorrencia_1.Resolucao_ocorrencia(); _this.resolucao_ocorrencia.cd_resolucao_ocorrencia = id; o.objetoJson = _this.resolucao_ocorrencia; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Resolucao_ocorrenciaDadosDetailsComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a resolucao_ocorrencia. ';
    } this.resolucao_ocorrencia = result; };
    Resolucao_ocorrenciaDadosDetailsComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Resolucao_ocorrenciaDadosDetailsComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'resolucao_ocorrencia-dados-details', templateUrl: 'resolucao_ocorrencia_dadosDetails.component.html' }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Resolucao_ocorrenciaDadosDetailsComponent);
    return Resolucao_ocorrenciaDadosDetailsComponent;
}());
exports.Resolucao_ocorrenciaDadosDetailsComponent = Resolucao_ocorrenciaDadosDetailsComponent;
//# sourceMappingURL=resolucao_ocorrencia_dadosDetails.component.js.map