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
var Programa_qualidade_1 = require('../../../modelo/Programa_qualidade');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Programa_qualidadeComponent = (function () {
    function Programa_qualidadeComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = '';
        this.listaDados = [];
    }
    Programa_qualidadeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.programa_qualidadeAux = new Programa_qualidade_1.Programa_qualidade();
        var dataAux = new ObjetoVirtual_1.ObjetoVirtual();
        dataAux.classeJava = 'br.com.primum.modelo.programa_qualidade.Programa_qualidade';
        dataAux.objetoJson = this.programa_qualidadeAux;
        this.dataService.efetuarPesquisa(dataAux).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
    };
    Programa_qualidadeComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro a pesquisa de Programa_qualidade. ';
        this.router.navigate(['/home']);
    } this.listaDados = result; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Programa_qualidadeComponent.prototype, "listaDados", void 0);
    Programa_qualidadeComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'programa_qualidade-selector', templateUrl: 'programa_qualidade.component.html' }), 
        __metadata('design:paramtypes', [pesquisa_service_1.PesquisaService, router_1.Router])
    ], Programa_qualidadeComponent);
    return Programa_qualidadeComponent;
}());
exports.Programa_qualidadeComponent = Programa_qualidadeComponent;
//# sourceMappingURL=programa_qualidade.component.js.map