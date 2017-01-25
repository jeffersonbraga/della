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
var Operacao_notificacao_1 = require('../../../modelo/Operacao_notificacao');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Operacao_notificacaoComponent = (function () {
    function Operacao_notificacaoComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = '';
        this.listaDados = [];
    }
    Operacao_notificacaoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.operacao_notificacaoAux = new Operacao_notificacao_1.Operacao_notificacao();
        var dataAux = new ObjetoVirtual_1.ObjetoVirtual();
        dataAux.classeJava = 'br.com.primum.modelo.operacao_notificacao.Operacao_notificacao';
        dataAux.objetoJson = this.operacao_notificacaoAux;
        this.dataService.efetuarPesquisa(dataAux).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
    };
    Operacao_notificacaoComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro a pesquisa de Operacao_notificacao. ';
        this.router.navigate(['/home']);
    } this.listaDados = result; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Operacao_notificacaoComponent.prototype, "listaDados", void 0);
    Operacao_notificacaoComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'operacao_notificacao-selector', templateUrl: 'operacao_notificacao.component.html' }), 
        __metadata('design:paramtypes', [pesquisa_service_1.PesquisaService, router_1.Router])
    ], Operacao_notificacaoComponent);
    return Operacao_notificacaoComponent;
}());
exports.Operacao_notificacaoComponent = Operacao_notificacaoComponent;
//# sourceMappingURL=operacao_notificacao.component.js.map