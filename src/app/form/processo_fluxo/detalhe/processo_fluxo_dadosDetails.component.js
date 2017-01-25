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
var Processo_fluxo_1 = require('../../../modelo/Processo_fluxo');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Processo_fluxoDadosDetailsComponent = (function () {
    function Processo_fluxoDadosDetailsComponent(route, pesquisaService) {
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Processo_fluxoDadosDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.processo_fluxo.Processo_fluxo"; var id = +params['id']; _this.processo_fluxo = new Processo_fluxo_1.Processo_fluxo(); _this.processo_fluxo.cd_processo_fluxo = id; o.objetoJson = _this.processo_fluxo; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Processo_fluxoDadosDetailsComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a processo_fluxo. ';
    } this.processo_fluxo = result; };
    Processo_fluxoDadosDetailsComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Processo_fluxoDadosDetailsComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'processo_fluxo-dados-details', templateUrl: 'processo_fluxo_dadosDetails.component.html' }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Processo_fluxoDadosDetailsComponent);
    return Processo_fluxoDadosDetailsComponent;
}());
exports.Processo_fluxoDadosDetailsComponent = Processo_fluxoDadosDetailsComponent;
//# sourceMappingURL=processo_fluxo_dadosDetails.component.js.map