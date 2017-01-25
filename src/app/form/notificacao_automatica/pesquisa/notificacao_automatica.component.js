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
var Notificacao_automatica_1 = require('../../../modelo/Notificacao_automatica');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Notificacao_automaticaComponent = (function () {
    function Notificacao_automaticaComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = '';
        this.listaDados = [];
    }
    Notificacao_automaticaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.notificacao_automaticaAux = new Notificacao_automatica_1.Notificacao_automatica();
        var dataAux = new ObjetoVirtual_1.ObjetoVirtual();
        dataAux.classeJava = 'br.com.primum.modelo.notificacao_automatica.Notificacao_automatica';
        dataAux.objetoJson = this.notificacao_automaticaAux;
        this.dataService.efetuarPesquisa(dataAux).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
    };
    Notificacao_automaticaComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro a pesquisa de Notificacao_automatica. ';
        this.router.navigate(['/home']);
    } this.listaDados = result; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Notificacao_automaticaComponent.prototype, "listaDados", void 0);
    Notificacao_automaticaComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'notificacao_automatica-selector', templateUrl: 'notificacao_automatica.component.html' }), 
        __metadata('design:paramtypes', [pesquisa_service_1.PesquisaService, router_1.Router])
    ], Notificacao_automaticaComponent);
    return Notificacao_automaticaComponent;
}());
exports.Notificacao_automaticaComponent = Notificacao_automaticaComponent;
//# sourceMappingURL=notificacao_automatica.component.js.map