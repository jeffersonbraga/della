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
var Container_principalDadosDetailsComponent = (function () {
    function Container_principalDadosDetailsComponent(route, pesquisaService) {
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Container_principalDadosDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.container_principal.Container_principal"; var id = +params['id']; _this.container_principal = new Container_principal_1.Container_principal(); _this.container_principal.cd_container = id; o.objetoJson = _this.container_principal; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Container_principalDadosDetailsComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a container_principal. ';
    } this.container_principal = result; };
    Container_principalDadosDetailsComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Container_principalDadosDetailsComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'container_principal-dados-details', templateUrl: 'container_principal_dadosDetails.component.html' }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Container_principalDadosDetailsComponent);
    return Container_principalDadosDetailsComponent;
}());
exports.Container_principalDadosDetailsComponent = Container_principalDadosDetailsComponent;
//# sourceMappingURL=container_principal_dadosDetails.component.js.map