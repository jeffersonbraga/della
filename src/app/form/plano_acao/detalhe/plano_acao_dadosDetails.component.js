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
var Plano_acao_1 = require('../../../modelo/Plano_acao');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Plano_acaoDadosDetailsComponent = (function () {
    function Plano_acaoDadosDetailsComponent(route, pesquisaService) {
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Plano_acaoDadosDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.plano_acao.Plano_acao"; var id = +params['id']; _this.plano_acao = new Plano_acao_1.Plano_acao(); _this.plano_acao.cd_plano_acao = id; o.objetoJson = _this.plano_acao; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Plano_acaoDadosDetailsComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a plano_acao. ';
    } this.plano_acao = result; };
    Plano_acaoDadosDetailsComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Plano_acaoDadosDetailsComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'plano_acao-dados-details', templateUrl: 'plano_acao_dadosDetails.component.html' }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Plano_acaoDadosDetailsComponent);
    return Plano_acaoDadosDetailsComponent;
}());
exports.Plano_acaoDadosDetailsComponent = Plano_acaoDadosDetailsComponent;
//# sourceMappingURL=plano_acao_dadosDetails.component.js.map