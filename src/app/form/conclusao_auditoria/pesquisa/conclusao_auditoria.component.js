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
var Conclusao_auditoria_1 = require('../../../modelo/Conclusao_auditoria');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Conclusao_auditoriaComponent = (function () {
    function Conclusao_auditoriaComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = '';
        this.listaDados = [];
    }
    Conclusao_auditoriaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.conclusao_auditoriaAux = new Conclusao_auditoria_1.Conclusao_auditoria();
        var dataAux = new ObjetoVirtual_1.ObjetoVirtual();
        dataAux.classeJava = 'br.com.primum.modelo.conclusao_auditoria.Conclusao_auditoria';
        dataAux.objetoJson = this.conclusao_auditoriaAux;
        this.dataService.efetuarPesquisa(dataAux).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
    };
    Conclusao_auditoriaComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro a pesquisa de Conclusao_auditoria. ';
        this.router.navigate(['/home']);
    } this.listaDados = result; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Conclusao_auditoriaComponent.prototype, "listaDados", void 0);
    Conclusao_auditoriaComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'conclusao_auditoria-selector', templateUrl: 'conclusao_auditoria.component.html' }), 
        __metadata('design:paramtypes', [pesquisa_service_1.PesquisaService, router_1.Router])
    ], Conclusao_auditoriaComponent);
    return Conclusao_auditoriaComponent;
}());
exports.Conclusao_auditoriaComponent = Conclusao_auditoriaComponent;
//# sourceMappingURL=conclusao_auditoria.component.js.map