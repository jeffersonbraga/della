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
var Container_principal_1 = require('../../../modelo/Container_principal');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Container_principalComponent = (function () {
    function Container_principalComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = '';
        this.listaDados = [];
    }
    Container_principalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.container_principalAux = new Container_principal_1.Container_principal();
        var dataAux = new ObjetoVirtual_1.ObjetoVirtual();
        dataAux.classeJava = 'br.com.primum.modelo.container_principal.Container_principal';
        dataAux.objetoJson = this.container_principalAux;
        this.dataService.efetuarPesquisa(dataAux).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
    };
    Container_principalComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro a pesquisa de Container_principal. ';
        this.router.navigate(['/home']);
    } this.listaDados = result; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Container_principalComponent.prototype, "listaDados", void 0);
    Container_principalComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'container_principal-selector', templateUrl: 'container_principal.component.html' }), 
        __metadata('design:paramtypes', [pesquisa_service_1.PesquisaService, router_1.Router])
    ], Container_principalComponent);
    return Container_principalComponent;
}());
exports.Container_principalComponent = Container_principalComponent;
//# sourceMappingURL=container_principal.component.js.map