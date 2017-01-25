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
var Evidencia_helpdesk_1 = require('../../../modelo/Evidencia_helpdesk');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Evidencia_helpdeskDadosDetailsComponent = (function () {
    function Evidencia_helpdeskDadosDetailsComponent(route, pesquisaService) {
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Evidencia_helpdeskDadosDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.evidencia_helpdesk.Evidencia_helpdesk"; var id = +params['id']; _this.evidencia_helpdesk = new Evidencia_helpdesk_1.Evidencia_helpdesk(); _this.evidencia_helpdesk.cd_evidencia_helpdesk = id; o.objetoJson = _this.evidencia_helpdesk; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Evidencia_helpdeskDadosDetailsComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a evidencia_helpdesk. ';
    } this.evidencia_helpdesk = result; };
    Evidencia_helpdeskDadosDetailsComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Evidencia_helpdeskDadosDetailsComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'evidencia_helpdesk-dados-details', templateUrl: 'evidencia_helpdesk_dadosDetails.component.html' }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Evidencia_helpdeskDadosDetailsComponent);
    return Evidencia_helpdeskDadosDetailsComponent;
}());
exports.Evidencia_helpdeskDadosDetailsComponent = Evidencia_helpdeskDadosDetailsComponent;
//# sourceMappingURL=evidencia_helpdesk_dadosDetails.component.js.map