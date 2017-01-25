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
var Classificacao_auditoria_1 = require('../../../modelo/Classificacao_auditoria');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Classificacao_auditoriaDadosDetailsComponent = (function () {
    function Classificacao_auditoriaDadosDetailsComponent(route, pesquisaService) {
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Classificacao_auditoriaDadosDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.classificacao_auditoria.Classificacao_auditoria"; var id = +params['id']; _this.classificacao_auditoria = new Classificacao_auditoria_1.Classificacao_auditoria(); _this.classificacao_auditoria.cd_classificacao_auditoria = id; o.objetoJson = _this.classificacao_auditoria; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Classificacao_auditoriaDadosDetailsComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a classificacao_auditoria. ';
    } this.classificacao_auditoria = result; };
    Classificacao_auditoriaDadosDetailsComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Classificacao_auditoriaDadosDetailsComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'classificacao_auditoria-dados-details', templateUrl: 'classificacao_auditoria_dadosDetails.component.html' }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Classificacao_auditoriaDadosDetailsComponent);
    return Classificacao_auditoriaDadosDetailsComponent;
}());
exports.Classificacao_auditoriaDadosDetailsComponent = Classificacao_auditoriaDadosDetailsComponent;
//# sourceMappingURL=classificacao_auditoria_dadosDetails.component.js.map