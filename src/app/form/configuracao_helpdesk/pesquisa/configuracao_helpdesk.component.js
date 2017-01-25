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
var Configuracao_helpdesk_1 = require('../../../modelo/Configuracao_helpdesk');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Configuracao_helpdeskComponent = (function () {
    function Configuracao_helpdeskComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = '';
        this.listaDados = [];
    }
    Configuracao_helpdeskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.configuracao_helpdeskAux = new Configuracao_helpdesk_1.Configuracao_helpdesk();
        var dataAux = new ObjetoVirtual_1.ObjetoVirtual();
        dataAux.classeJava = 'br.com.primum.modelo.configuracao_helpdesk.Configuracao_helpdesk';
        dataAux.objetoJson = this.configuracao_helpdeskAux;
        this.dataService.efetuarPesquisa(dataAux).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
    };
    Configuracao_helpdeskComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro a pesquisa de Configuracao_helpdesk. ';
        this.router.navigate(['/home']);
    } this.listaDados = result; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Configuracao_helpdeskComponent.prototype, "listaDados", void 0);
    Configuracao_helpdeskComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'configuracao_helpdesk-selector', templateUrl: 'configuracao_helpdesk.component.html' }), 
        __metadata('design:paramtypes', [pesquisa_service_1.PesquisaService, router_1.Router])
    ], Configuracao_helpdeskComponent);
    return Configuracao_helpdeskComponent;
}());
exports.Configuracao_helpdeskComponent = Configuracao_helpdeskComponent;
//# sourceMappingURL=configuracao_helpdesk.component.js.map