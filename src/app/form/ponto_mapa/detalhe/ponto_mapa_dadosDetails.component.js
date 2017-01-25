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
var Ponto_mapa_1 = require('../../../modelo/Ponto_mapa');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Ponto_mapaDadosDetailsComponent = (function () {
    function Ponto_mapaDadosDetailsComponent(route, pesquisaService) {
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Ponto_mapaDadosDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.ponto_mapa.Ponto_mapa"; var id = +params['id']; _this.ponto_mapa = new Ponto_mapa_1.Ponto_mapa(); _this.ponto_mapa.cd_ponto_mapa = id; o.objetoJson = _this.ponto_mapa; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Ponto_mapaDadosDetailsComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a ponto_mapa. ';
    } this.ponto_mapa = result; };
    Ponto_mapaDadosDetailsComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Ponto_mapaDadosDetailsComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'ponto_mapa-dados-details', templateUrl: 'ponto_mapa_dadosDetails.component.html' }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Ponto_mapaDadosDetailsComponent);
    return Ponto_mapaDadosDetailsComponent;
}());
exports.Ponto_mapaDadosDetailsComponent = Ponto_mapaDadosDetailsComponent;
//# sourceMappingURL=ponto_mapa_dadosDetails.component.js.map