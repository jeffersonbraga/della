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
var Cronograma_auditoria_1 = require('../../../modelo/Cronograma_auditoria');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Cronograma_auditoriaComponent = (function () {
    function Cronograma_auditoriaComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = '';
        this.listaDados = [];
    }
    Cronograma_auditoriaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cronograma_auditoriaAux = new Cronograma_auditoria_1.Cronograma_auditoria();
        var dataAux = new ObjetoVirtual_1.ObjetoVirtual();
        dataAux.classeJava = 'br.com.primum.modelo.cronograma_auditoria.Cronograma_auditoria';
        dataAux.objetoJson = this.cronograma_auditoriaAux;
        this.dataService.efetuarPesquisa(dataAux).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
    };
    Cronograma_auditoriaComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro a pesquisa de Cronograma_auditoria. ';
        this.router.navigate(['/home']);
    } this.listaDados = result; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Cronograma_auditoriaComponent.prototype, "listaDados", void 0);
    Cronograma_auditoriaComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'cronograma_auditoria-selector', templateUrl: 'cronograma_auditoria.component.html' }), 
        __metadata('design:paramtypes', [pesquisa_service_1.PesquisaService, router_1.Router])
    ], Cronograma_auditoriaComponent);
    return Cronograma_auditoriaComponent;
}());
exports.Cronograma_auditoriaComponent = Cronograma_auditoriaComponent;
//# sourceMappingURL=cronograma_auditoria.component.js.map