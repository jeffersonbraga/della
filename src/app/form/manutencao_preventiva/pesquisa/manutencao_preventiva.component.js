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
var Manutencao_preventiva_1 = require('../../../modelo/Manutencao_preventiva');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Manutencao_preventivaComponent = (function () {
    function Manutencao_preventivaComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = '';
        this.listaDados = [];
    }
    Manutencao_preventivaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.manutencao_preventivaAux = new Manutencao_preventiva_1.Manutencao_preventiva();
        var dataAux = new ObjetoVirtual_1.ObjetoVirtual();
        dataAux.classeJava = 'br.com.primum.modelo.manutencao_preventiva.Manutencao_preventiva';
        dataAux.objetoJson = this.manutencao_preventivaAux;
        this.dataService.efetuarPesquisa(dataAux).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
    };
    Manutencao_preventivaComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro a pesquisa de Manutencao_preventiva. ';
        this.router.navigate(['/home']);
    } this.listaDados = result; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Manutencao_preventivaComponent.prototype, "listaDados", void 0);
    Manutencao_preventivaComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'manutencao_preventiva-selector', templateUrl: 'manutencao_preventiva.component.html' }), 
        __metadata('design:paramtypes', [pesquisa_service_1.PesquisaService, router_1.Router])
    ], Manutencao_preventivaComponent);
    return Manutencao_preventivaComponent;
}());
exports.Manutencao_preventivaComponent = Manutencao_preventivaComponent;
//# sourceMappingURL=manutencao_preventiva.component.js.map