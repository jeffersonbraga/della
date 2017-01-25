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
var Grupo_auditoria_1 = require('../../../modelo/Grupo_auditoria');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Grupo_auditoriaComponent = (function () {
    function Grupo_auditoriaComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = '';
        this.listaDados = [];
    }
    Grupo_auditoriaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.grupo_auditoriaAux = new Grupo_auditoria_1.Grupo_auditoria();
        var dataAux = new ObjetoVirtual_1.ObjetoVirtual();
        dataAux.classeJava = 'br.com.primum.modelo.grupo_auditoria.Grupo_auditoria';
        dataAux.objetoJson = this.grupo_auditoriaAux;
        this.dataService.efetuarPesquisa(dataAux).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
    };
    Grupo_auditoriaComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro a pesquisa de Grupo_auditoria. ';
        this.router.navigate(['/home']);
    } this.listaDados = result; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Grupo_auditoriaComponent.prototype, "listaDados", void 0);
    Grupo_auditoriaComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'grupo_auditoria-selector', templateUrl: 'grupo_auditoria.component.html' }), 
        __metadata('design:paramtypes', [pesquisa_service_1.PesquisaService, router_1.Router])
    ], Grupo_auditoriaComponent);
    return Grupo_auditoriaComponent;
}());
exports.Grupo_auditoriaComponent = Grupo_auditoriaComponent;
//# sourceMappingURL=grupo_auditoria.component.js.map