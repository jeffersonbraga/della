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
var Equipe_cronograma_auditoria_1 = require('../../../modelo/Equipe_cronograma_auditoria');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Equipe_cronograma_auditoriaComponent = (function () {
    function Equipe_cronograma_auditoriaComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = '';
        this.listaDados = [];
    }
    Equipe_cronograma_auditoriaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.equipe_cronograma_auditoriaAux = new Equipe_cronograma_auditoria_1.Equipe_cronograma_auditoria();
        var dataAux = new ObjetoVirtual_1.ObjetoVirtual();
        dataAux.classeJava = 'br.com.primum.modelo.equipe_cronograma_auditoria.Equipe_cronograma_auditoria';
        dataAux.objetoJson = this.equipe_cronograma_auditoriaAux;
        this.dataService.efetuarPesquisa(dataAux).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
    };
    Equipe_cronograma_auditoriaComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro a pesquisa de Equipe_cronograma_auditoria. ';
        this.router.navigate(['/home']);
    } this.listaDados = result; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Equipe_cronograma_auditoriaComponent.prototype, "listaDados", void 0);
    Equipe_cronograma_auditoriaComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'equipe_cronograma_auditoria-selector', templateUrl: 'equipe_cronograma_auditoria.component.html' }), 
        __metadata('design:paramtypes', [pesquisa_service_1.PesquisaService, router_1.Router])
    ], Equipe_cronograma_auditoriaComponent);
    return Equipe_cronograma_auditoriaComponent;
}());
exports.Equipe_cronograma_auditoriaComponent = Equipe_cronograma_auditoriaComponent;
//# sourceMappingURL=equipe_cronograma_auditoria.component.js.map