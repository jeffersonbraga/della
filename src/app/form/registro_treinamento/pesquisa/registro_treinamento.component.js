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
var Registro_treinamento_1 = require('../../../modelo/Registro_treinamento');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Registro_treinamentoComponent = (function () {
    function Registro_treinamentoComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = '';
        this.listaDados = [];
    }
    Registro_treinamentoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.registro_treinamentoAux = new Registro_treinamento_1.Registro_treinamento();
        var dataAux = new ObjetoVirtual_1.ObjetoVirtual();
        dataAux.classeJava = 'br.com.primum.modelo.registro_treinamento.Registro_treinamento';
        dataAux.objetoJson = this.registro_treinamentoAux;
        this.dataService.efetuarPesquisa(dataAux).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
    };
    Registro_treinamentoComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro a pesquisa de Registro_treinamento. ';
        this.router.navigate(['/home']);
    } this.listaDados = result; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Registro_treinamentoComponent.prototype, "listaDados", void 0);
    Registro_treinamentoComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'registro_treinamento-selector', templateUrl: 'registro_treinamento.component.html' }), 
        __metadata('design:paramtypes', [pesquisa_service_1.PesquisaService, router_1.Router])
    ], Registro_treinamentoComponent);
    return Registro_treinamentoComponent;
}());
exports.Registro_treinamentoComponent = Registro_treinamentoComponent;
//# sourceMappingURL=registro_treinamento.component.js.map