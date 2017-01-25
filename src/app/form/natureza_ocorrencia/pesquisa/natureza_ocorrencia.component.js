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
var Natureza_ocorrencia_1 = require('../../../modelo/Natureza_ocorrencia');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Natureza_ocorrenciaComponent = (function () {
    function Natureza_ocorrenciaComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = '';
        this.listaDados = [];
    }
    Natureza_ocorrenciaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.natureza_ocorrenciaAux = new Natureza_ocorrencia_1.Natureza_ocorrencia();
        var dataAux = new ObjetoVirtual_1.ObjetoVirtual();
        dataAux.classeJava = 'br.com.primum.modelo.natureza_ocorrencia.Natureza_ocorrencia';
        dataAux.objetoJson = this.natureza_ocorrenciaAux;
        this.dataService.efetuarPesquisa(dataAux).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
    };
    Natureza_ocorrenciaComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro a pesquisa de Natureza_ocorrencia. ';
        this.router.navigate(['/home']);
    } this.listaDados = result; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Natureza_ocorrenciaComponent.prototype, "listaDados", void 0);
    Natureza_ocorrenciaComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'natureza_ocorrencia-selector', templateUrl: 'natureza_ocorrencia.component.html' }), 
        __metadata('design:paramtypes', [pesquisa_service_1.PesquisaService, router_1.Router])
    ], Natureza_ocorrenciaComponent);
    return Natureza_ocorrenciaComponent;
}());
exports.Natureza_ocorrenciaComponent = Natureza_ocorrenciaComponent;
//# sourceMappingURL=natureza_ocorrencia.component.js.map