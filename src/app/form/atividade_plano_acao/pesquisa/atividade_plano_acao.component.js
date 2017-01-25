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
var Atividade_plano_acao_1 = require('../../../modelo/Atividade_plano_acao');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Atividade_plano_acaoComponent = (function () {
    function Atividade_plano_acaoComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = '';
        this.listaDados = [];
    }
    Atividade_plano_acaoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.atividade_plano_acaoAux = new Atividade_plano_acao_1.Atividade_plano_acao();
        var dataAux = new ObjetoVirtual_1.ObjetoVirtual();
        dataAux.classeJava = 'br.com.primum.modelo.atividade_plano_acao.Atividade_plano_acao';
        dataAux.objetoJson = this.atividade_plano_acaoAux;
        this.dataService.efetuarPesquisa(dataAux).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
    };
    Atividade_plano_acaoComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro a pesquisa de Atividade_plano_acao. ';
        this.router.navigate(['/home']);
    } this.listaDados = result; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Atividade_plano_acaoComponent.prototype, "listaDados", void 0);
    Atividade_plano_acaoComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'atividade_plano_acao-selector', templateUrl: 'atividade_plano_acao.component.html' }), 
        __metadata('design:paramtypes', [pesquisa_service_1.PesquisaService, router_1.Router])
    ], Atividade_plano_acaoComponent);
    return Atividade_plano_acaoComponent;
}());
exports.Atividade_plano_acaoComponent = Atividade_plano_acaoComponent;
//# sourceMappingURL=atividade_plano_acao.component.js.map