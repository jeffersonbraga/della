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
var Permissao_indicador_1 = require('../../../modelo/Permissao_indicador');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Permissao_indicadorComponent = (function () {
    function Permissao_indicadorComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = '';
        this.listaDados = [];
    }
    Permissao_indicadorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.permissao_indicadorAux = new Permissao_indicador_1.Permissao_indicador();
        var dataAux = new ObjetoVirtual_1.ObjetoVirtual();
        dataAux.classeJava = 'br.com.primum.modelo.permissao_indicador.Permissao_indicador';
        dataAux.objetoJson = this.permissao_indicadorAux;
        this.dataService.efetuarPesquisa(dataAux).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
    };
    Permissao_indicadorComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro a pesquisa de Permissao_indicador. ';
        this.router.navigate(['/home']);
    } this.listaDados = result; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Permissao_indicadorComponent.prototype, "listaDados", void 0);
    Permissao_indicadorComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'permissao_indicador-selector', templateUrl: 'permissao_indicador.component.html' }), 
        __metadata('design:paramtypes', [pesquisa_service_1.PesquisaService, router_1.Router])
    ], Permissao_indicadorComponent);
    return Permissao_indicadorComponent;
}());
exports.Permissao_indicadorComponent = Permissao_indicadorComponent;
//# sourceMappingURL=permissao_indicador.component.js.map