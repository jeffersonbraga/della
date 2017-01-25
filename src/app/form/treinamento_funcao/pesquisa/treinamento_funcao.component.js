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
var Treinamento_funcao_1 = require('../../../modelo/Treinamento_funcao');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Treinamento_funcaoComponent = (function () {
    function Treinamento_funcaoComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = '';
        this.listaDados = [];
    }
    Treinamento_funcaoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.treinamento_funcaoAux = new Treinamento_funcao_1.Treinamento_funcao();
        var dataAux = new ObjetoVirtual_1.ObjetoVirtual();
        dataAux.classeJava = 'br.com.primum.modelo.treinamento_funcao.Treinamento_funcao';
        dataAux.objetoJson = this.treinamento_funcaoAux;
        this.dataService.efetuarPesquisa(dataAux).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
    };
    Treinamento_funcaoComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro a pesquisa de Treinamento_funcao. ';
        this.router.navigate(['/home']);
    } this.listaDados = result; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Treinamento_funcaoComponent.prototype, "listaDados", void 0);
    Treinamento_funcaoComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'treinamento_funcao-selector', templateUrl: 'treinamento_funcao.component.html' }), 
        __metadata('design:paramtypes', [pesquisa_service_1.PesquisaService, router_1.Router])
    ], Treinamento_funcaoComponent);
    return Treinamento_funcaoComponent;
}());
exports.Treinamento_funcaoComponent = Treinamento_funcaoComponent;
//# sourceMappingURL=treinamento_funcao.component.js.map