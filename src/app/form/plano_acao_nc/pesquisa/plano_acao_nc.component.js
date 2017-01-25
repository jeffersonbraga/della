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
var Plano_acao_nc_1 = require('../../../modelo/Plano_acao_nc');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Plano_acao_ncComponent = (function () {
    function Plano_acao_ncComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = '';
        this.listaDados = [];
    }
    Plano_acao_ncComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.plano_acao_ncAux = new Plano_acao_nc_1.Plano_acao_nc();
        var dataAux = new ObjetoVirtual_1.ObjetoVirtual();
        dataAux.classeJava = 'br.com.primum.modelo.plano_acao_nc.Plano_acao_nc';
        dataAux.objetoJson = this.plano_acao_ncAux;
        this.dataService.efetuarPesquisa(dataAux).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
    };
    Plano_acao_ncComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro a pesquisa de Plano_acao_nc. ';
        this.router.navigate(['/home']);
    } this.listaDados = result; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Plano_acao_ncComponent.prototype, "listaDados", void 0);
    Plano_acao_ncComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'plano_acao_nc-selector', templateUrl: 'plano_acao_nc.component.html' }), 
        __metadata('design:paramtypes', [pesquisa_service_1.PesquisaService, router_1.Router])
    ], Plano_acao_ncComponent);
    return Plano_acao_ncComponent;
}());
exports.Plano_acao_ncComponent = Plano_acao_ncComponent;
//# sourceMappingURL=plano_acao_nc.component.js.map