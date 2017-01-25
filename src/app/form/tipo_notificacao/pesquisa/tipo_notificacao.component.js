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
var Tipo_notificacao_1 = require('../../../modelo/Tipo_notificacao');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Tipo_notificacaoComponent = (function () {
    function Tipo_notificacaoComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = '';
        this.listaDados = [];
    }
    Tipo_notificacaoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tipo_notificacaoAux = new Tipo_notificacao_1.Tipo_notificacao();
        var dataAux = new ObjetoVirtual_1.ObjetoVirtual();
        dataAux.classeJava = 'br.com.primum.modelo.tipo_notificacao.Tipo_notificacao';
        dataAux.objetoJson = this.tipo_notificacaoAux;
        this.dataService.efetuarPesquisa(dataAux).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
    };
    Tipo_notificacaoComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro a pesquisa de Tipo_notificacao. ';
        this.router.navigate(['/home']);
    } this.listaDados = result; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Tipo_notificacaoComponent.prototype, "listaDados", void 0);
    Tipo_notificacaoComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'tipo_notificacao-selector', templateUrl: 'tipo_notificacao.component.html' }), 
        __metadata('design:paramtypes', [pesquisa_service_1.PesquisaService, router_1.Router])
    ], Tipo_notificacaoComponent);
    return Tipo_notificacaoComponent;
}());
exports.Tipo_notificacaoComponent = Tipo_notificacaoComponent;
//# sourceMappingURL=tipo_notificacao.component.js.map