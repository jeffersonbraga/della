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
var Cronograma_manutencao_1 = require('../../../modelo/Cronograma_manutencao');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Cronograma_manutencaoComponent = (function () {
    function Cronograma_manutencaoComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = '';
        this.listaDados = [];
    }
    Cronograma_manutencaoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cronograma_manutencaoAux = new Cronograma_manutencao_1.Cronograma_manutencao();
        var dataAux = new ObjetoVirtual_1.ObjetoVirtual();
        dataAux.classeJava = 'br.com.primum.modelo.cronograma_manutencao.Cronograma_manutencao';
        dataAux.objetoJson = this.cronograma_manutencaoAux;
        this.dataService.efetuarPesquisa(dataAux).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
    };
    Cronograma_manutencaoComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro a pesquisa de Cronograma_manutencao. ';
        this.router.navigate(['/home']);
    } this.listaDados = result; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Cronograma_manutencaoComponent.prototype, "listaDados", void 0);
    Cronograma_manutencaoComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'cronograma_manutencao-selector', templateUrl: 'cronograma_manutencao.component.html' }), 
        __metadata('design:paramtypes', [pesquisa_service_1.PesquisaService, router_1.Router])
    ], Cronograma_manutencaoComponent);
    return Cronograma_manutencaoComponent;
}());
exports.Cronograma_manutencaoComponent = Cronograma_manutencaoComponent;
//# sourceMappingURL=cronograma_manutencao.component.js.map