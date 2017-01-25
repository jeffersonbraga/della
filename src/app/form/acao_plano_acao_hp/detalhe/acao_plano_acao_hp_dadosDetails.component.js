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
var Acao_plano_acao_hp_1 = require('../../../modelo/Acao_plano_acao_hp');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Acao_plano_acao_hpDadosDetailsComponent = (function () {
    function Acao_plano_acao_hpDadosDetailsComponent(route, pesquisaService) {
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Acao_plano_acao_hpDadosDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.acao_plano_acao_hp.Acao_plano_acao_hp"; var id = +params['id']; _this.acao_plano_acao_hp = new Acao_plano_acao_hp_1.Acao_plano_acao_hp(); _this.acao_plano_acao_hp.cd_acao_plano_acao_hp = id; o.objetoJson = _this.acao_plano_acao_hp; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Acao_plano_acao_hpDadosDetailsComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a acao_plano_acao_hp. ';
    } this.acao_plano_acao_hp = result; };
    Acao_plano_acao_hpDadosDetailsComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Acao_plano_acao_hpDadosDetailsComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'acao_plano_acao_hp-dados-details', templateUrl: 'acao_plano_acao_hp_dadosDetails.component.html' }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Acao_plano_acao_hpDadosDetailsComponent);
    return Acao_plano_acao_hpDadosDetailsComponent;
}());
exports.Acao_plano_acao_hpDadosDetailsComponent = Acao_plano_acao_hpDadosDetailsComponent;
//# sourceMappingURL=acao_plano_acao_hp_dadosDetails.component.js.map