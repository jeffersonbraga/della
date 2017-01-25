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
var Resolucao_ocorrencia_1 = require('../../../modelo/Resolucao_ocorrencia');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Resolucao_ocorrenciaComponent = (function () {
    function Resolucao_ocorrenciaComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = '';
        this.listaDados = [];
    }
    Resolucao_ocorrenciaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resolucao_ocorrenciaAux = new Resolucao_ocorrencia_1.Resolucao_ocorrencia();
        var dataAux = new ObjetoVirtual_1.ObjetoVirtual();
        dataAux.classeJava = 'br.com.primum.modelo.resolucao_ocorrencia.Resolucao_ocorrencia';
        dataAux.objetoJson = this.resolucao_ocorrenciaAux;
        this.dataService.efetuarPesquisa(dataAux).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
    };
    Resolucao_ocorrenciaComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro a pesquisa de Resolucao_ocorrencia. ';
        this.router.navigate(['/home']);
    } this.listaDados = result; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Resolucao_ocorrenciaComponent.prototype, "listaDados", void 0);
    Resolucao_ocorrenciaComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'resolucao_ocorrencia-selector', templateUrl: 'resolucao_ocorrencia.component.html' }), 
        __metadata('design:paramtypes', [pesquisa_service_1.PesquisaService, router_1.Router])
    ], Resolucao_ocorrenciaComponent);
    return Resolucao_ocorrenciaComponent;
}());
exports.Resolucao_ocorrenciaComponent = Resolucao_ocorrenciaComponent;
//# sourceMappingURL=resolucao_ocorrencia.component.js.map