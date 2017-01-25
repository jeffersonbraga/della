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
var Atv_exec_manutencao_1 = require('../../../modelo/Atv_exec_manutencao');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Atv_exec_manutencaoComponent = (function () {
    function Atv_exec_manutencaoComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = '';
        this.listaDados = [];
    }
    Atv_exec_manutencaoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.atv_exec_manutencaoAux = new Atv_exec_manutencao_1.Atv_exec_manutencao();
        var dataAux = new ObjetoVirtual_1.ObjetoVirtual();
        dataAux.classeJava = 'br.com.primum.modelo.atv_exec_manutencao.Atv_exec_manutencao';
        dataAux.objetoJson = this.atv_exec_manutencaoAux;
        this.dataService.efetuarPesquisa(dataAux).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
    };
    Atv_exec_manutencaoComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro a pesquisa de Atv_exec_manutencao. ';
        this.router.navigate(['/home']);
    } this.listaDados = result; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Atv_exec_manutencaoComponent.prototype, "listaDados", void 0);
    Atv_exec_manutencaoComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'atv_exec_manutencao-selector', templateUrl: 'atv_exec_manutencao.component.html' }), 
        __metadata('design:paramtypes', [pesquisa_service_1.PesquisaService, router_1.Router])
    ], Atv_exec_manutencaoComponent);
    return Atv_exec_manutencaoComponent;
}());
exports.Atv_exec_manutencaoComponent = Atv_exec_manutencaoComponent;
//# sourceMappingURL=atv_exec_manutencao.component.js.map