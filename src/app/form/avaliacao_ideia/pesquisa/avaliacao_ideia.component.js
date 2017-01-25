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
var Avaliacao_ideia_1 = require('../../../modelo/Avaliacao_ideia');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Avaliacao_ideiaComponent = (function () {
    function Avaliacao_ideiaComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = '';
        this.listaDados = [];
    }
    Avaliacao_ideiaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.avaliacao_ideiaAux = new Avaliacao_ideia_1.Avaliacao_ideia();
        var dataAux = new ObjetoVirtual_1.ObjetoVirtual();
        dataAux.classeJava = 'br.com.primum.modelo.avaliacao_ideia.Avaliacao_ideia';
        dataAux.objetoJson = this.avaliacao_ideiaAux;
        this.dataService.efetuarPesquisa(dataAux).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
    };
    Avaliacao_ideiaComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro a pesquisa de Avaliacao_ideia. ';
        this.router.navigate(['/home']);
    } this.listaDados = result; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Avaliacao_ideiaComponent.prototype, "listaDados", void 0);
    Avaliacao_ideiaComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'avaliacao_ideia-selector', templateUrl: 'avaliacao_ideia.component.html' }), 
        __metadata('design:paramtypes', [pesquisa_service_1.PesquisaService, router_1.Router])
    ], Avaliacao_ideiaComponent);
    return Avaliacao_ideiaComponent;
}());
exports.Avaliacao_ideiaComponent = Avaliacao_ideiaComponent;
//# sourceMappingURL=avaliacao_ideia.component.js.map