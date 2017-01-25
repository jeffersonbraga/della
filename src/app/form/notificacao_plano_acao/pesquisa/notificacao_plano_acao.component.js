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
var Notificacao_plano_acao_1 = require('../../../modelo/Notificacao_plano_acao');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Notificacao_plano_acaoComponent = (function () {
    function Notificacao_plano_acaoComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = '';
        this.listaDados = [];
    }
    Notificacao_plano_acaoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.notificacao_plano_acaoAux = new Notificacao_plano_acao_1.Notificacao_plano_acao();
        var dataAux = new ObjetoVirtual_1.ObjetoVirtual();
        dataAux.classeJava = 'br.com.primum.modelo.notificacao_plano_acao.Notificacao_plano_acao';
        dataAux.objetoJson = this.notificacao_plano_acaoAux;
        this.dataService.efetuarPesquisa(dataAux).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
    };
    Notificacao_plano_acaoComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro a pesquisa de Notificacao_plano_acao. ';
        this.router.navigate(['/home']);
    } this.listaDados = result; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Notificacao_plano_acaoComponent.prototype, "listaDados", void 0);
    Notificacao_plano_acaoComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'notificacao_plano_acao-selector', templateUrl: 'notificacao_plano_acao.component.html' }), 
        __metadata('design:paramtypes', [pesquisa_service_1.PesquisaService, router_1.Router])
    ], Notificacao_plano_acaoComponent);
    return Notificacao_plano_acaoComponent;
}());
exports.Notificacao_plano_acaoComponent = Notificacao_plano_acaoComponent;
//# sourceMappingURL=notificacao_plano_acao.component.js.map