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
var Formulario_indicador_1 = require('../../../modelo/Formulario_indicador');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Formulario_indicadorComponent = (function () {
    function Formulario_indicadorComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = '';
        this.listaDados = [];
    }
    Formulario_indicadorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formulario_indicadorAux = new Formulario_indicador_1.Formulario_indicador();
        var dataAux = new ObjetoVirtual_1.ObjetoVirtual();
        dataAux.classeJava = 'br.com.primum.modelo.formulario_indicador.Formulario_indicador';
        dataAux.objetoJson = this.formulario_indicadorAux;
        this.dataService.efetuarPesquisa(dataAux).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
    };
    Formulario_indicadorComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro a pesquisa de Formulario_indicador. ';
        this.router.navigate(['/home']);
    } this.listaDados = result; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Formulario_indicadorComponent.prototype, "listaDados", void 0);
    Formulario_indicadorComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'formulario_indicador-selector', templateUrl: 'formulario_indicador.component.html' }), 
        __metadata('design:paramtypes', [pesquisa_service_1.PesquisaService, router_1.Router])
    ], Formulario_indicadorComponent);
    return Formulario_indicadorComponent;
}());
exports.Formulario_indicadorComponent = Formulario_indicadorComponent;
//# sourceMappingURL=formulario_indicador.component.js.map