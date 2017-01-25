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
var Modulo_indicadores_1 = require('../../../modelo/Modulo_indicadores');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Modulo_indicadoresComponent = (function () {
    function Modulo_indicadoresComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = '';
        this.listaDados = [];
    }
    Modulo_indicadoresComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.modulo_indicadoresAux = new Modulo_indicadores_1.Modulo_indicadores();
        var dataAux = new ObjetoVirtual_1.ObjetoVirtual();
        dataAux.classeJava = 'br.com.primum.modelo.modulo_indicadores.Modulo_indicadores';
        dataAux.objetoJson = this.modulo_indicadoresAux;
        this.dataService.efetuarPesquisa(dataAux).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
    };
    Modulo_indicadoresComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro a pesquisa de Modulo_indicadores. ';
        this.router.navigate(['/home']);
    } this.listaDados = result; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Modulo_indicadoresComponent.prototype, "listaDados", void 0);
    Modulo_indicadoresComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'modulo_indicadores-selector', templateUrl: 'modulo_indicadores.component.html' }), 
        __metadata('design:paramtypes', [pesquisa_service_1.PesquisaService, router_1.Router])
    ], Modulo_indicadoresComponent);
    return Modulo_indicadoresComponent;
}());
exports.Modulo_indicadoresComponent = Modulo_indicadoresComponent;
//# sourceMappingURL=modulo_indicadores.component.js.map