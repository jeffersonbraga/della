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
var Categoria_ocorrencia_1 = require('../../../modelo/Categoria_ocorrencia');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Categoria_ocorrenciaComponent = (function () {
    function Categoria_ocorrenciaComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = '';
        this.listaDados = [];
    }
    Categoria_ocorrenciaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoria_ocorrenciaAux = new Categoria_ocorrencia_1.Categoria_ocorrencia();
        var dataAux = new ObjetoVirtual_1.ObjetoVirtual();
        dataAux.classeJava = 'br.com.primum.modelo.categoria_ocorrencia.Categoria_ocorrencia';
        dataAux.objetoJson = this.categoria_ocorrenciaAux;
        this.dataService.efetuarPesquisa(dataAux).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
    };
    Categoria_ocorrenciaComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro a pesquisa de Categoria_ocorrencia. ';
        this.router.navigate(['/home']);
    } this.listaDados = result; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Categoria_ocorrenciaComponent.prototype, "listaDados", void 0);
    Categoria_ocorrenciaComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'categoria_ocorrencia-selector', templateUrl: 'categoria_ocorrencia.component.html' }), 
        __metadata('design:paramtypes', [pesquisa_service_1.PesquisaService, router_1.Router])
    ], Categoria_ocorrenciaComponent);
    return Categoria_ocorrenciaComponent;
}());
exports.Categoria_ocorrenciaComponent = Categoria_ocorrenciaComponent;
//# sourceMappingURL=categoria_ocorrencia.component.js.map