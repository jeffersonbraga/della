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
var Indicador_customizado_1 = require('../../../modelo/Indicador_customizado');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Indicador_customizadoComponent = (function () {
    function Indicador_customizadoComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = '';
        this.listaDados = [];
    }
    Indicador_customizadoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.indicador_customizadoAux = new Indicador_customizado_1.Indicador_customizado();
        var dataAux = new ObjetoVirtual_1.ObjetoVirtual();
        dataAux.classeJava = 'br.com.primum.modelo.indicador_customizado.Indicador_customizado';
        dataAux.objetoJson = this.indicador_customizadoAux;
        this.dataService.efetuarPesquisa(dataAux).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
    };
    Indicador_customizadoComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro a pesquisa de Indicador_customizado. ';
        this.router.navigate(['/home']);
    } this.listaDados = result; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Indicador_customizadoComponent.prototype, "listaDados", void 0);
    Indicador_customizadoComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'indicador_customizado-selector', templateUrl: 'indicador_customizado.component.html' }), 
        __metadata('design:paramtypes', [pesquisa_service_1.PesquisaService, router_1.Router])
    ], Indicador_customizadoComponent);
    return Indicador_customizadoComponent;
}());
exports.Indicador_customizadoComponent = Indicador_customizadoComponent;
//# sourceMappingURL=indicador_customizado.component.js.map