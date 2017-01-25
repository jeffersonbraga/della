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
var Atividades_manutencao_1 = require('../../../modelo/Atividades_manutencao');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Atividades_manutencaoComponent = (function () {
    function Atividades_manutencaoComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = '';
        this.listaDados = [];
    }
    Atividades_manutencaoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.atividades_manutencaoAux = new Atividades_manutencao_1.Atividades_manutencao();
        var dataAux = new ObjetoVirtual_1.ObjetoVirtual();
        dataAux.classeJava = 'br.com.primum.modelo.atividades_manutencao.Atividades_manutencao';
        dataAux.objetoJson = this.atividades_manutencaoAux;
        this.dataService.efetuarPesquisa(dataAux).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
    };
    Atividades_manutencaoComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro a pesquisa de Atividades_manutencao. ';
        this.router.navigate(['/home']);
    } this.listaDados = result; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Atividades_manutencaoComponent.prototype, "listaDados", void 0);
    Atividades_manutencaoComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'atividades_manutencao-selector', templateUrl: 'atividades_manutencao.component.html' }), 
        __metadata('design:paramtypes', [pesquisa_service_1.PesquisaService, router_1.Router])
    ], Atividades_manutencaoComponent);
    return Atividades_manutencaoComponent;
}());
exports.Atividades_manutencaoComponent = Atividades_manutencaoComponent;
//# sourceMappingURL=atividades_manutencao.component.js.map