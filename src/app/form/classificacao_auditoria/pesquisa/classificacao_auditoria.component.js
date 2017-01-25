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
var Classificacao_auditoria_1 = require('../../../modelo/Classificacao_auditoria');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Classificacao_auditoriaComponent = (function () {
    function Classificacao_auditoriaComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = '';
        this.listaDados = [];
    }
    Classificacao_auditoriaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.classificacao_auditoriaAux = new Classificacao_auditoria_1.Classificacao_auditoria();
        var dataAux = new ObjetoVirtual_1.ObjetoVirtual();
        dataAux.classeJava = 'br.com.primum.modelo.classificacao_auditoria.Classificacao_auditoria';
        dataAux.objetoJson = this.classificacao_auditoriaAux;
        this.dataService.efetuarPesquisa(dataAux).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
    };
    Classificacao_auditoriaComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro a pesquisa de Classificacao_auditoria. ';
        this.router.navigate(['/home']);
    } this.listaDados = result; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Classificacao_auditoriaComponent.prototype, "listaDados", void 0);
    Classificacao_auditoriaComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'classificacao_auditoria-selector', templateUrl: 'classificacao_auditoria.component.html' }), 
        __metadata('design:paramtypes', [pesquisa_service_1.PesquisaService, router_1.Router])
    ], Classificacao_auditoriaComponent);
    return Classificacao_auditoriaComponent;
}());
exports.Classificacao_auditoriaComponent = Classificacao_auditoriaComponent;
//# sourceMappingURL=classificacao_auditoria.component.js.map