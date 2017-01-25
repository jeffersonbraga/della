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
var Escalonamento_formulario_1 = require('../../../modelo/Escalonamento_formulario');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Escalonamento_formularioDadosDetailsComponent = (function () {
    function Escalonamento_formularioDadosDetailsComponent(route, pesquisaService) {
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Escalonamento_formularioDadosDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.escalonamento_formulario.Escalonamento_formulario"; var id = +params['id']; _this.escalonamento_formulario = new Escalonamento_formulario_1.Escalonamento_formulario(); _this.escalonamento_formulario.cd_escalonamento_formulario = id; o.objetoJson = _this.escalonamento_formulario; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Escalonamento_formularioDadosDetailsComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a escalonamento_formulario. ';
    } this.escalonamento_formulario = result; };
    Escalonamento_formularioDadosDetailsComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Escalonamento_formularioDadosDetailsComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'escalonamento_formulario-dados-details', templateUrl: 'escalonamento_formulario_dadosDetails.component.html' }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Escalonamento_formularioDadosDetailsComponent);
    return Escalonamento_formularioDadosDetailsComponent;
}());
exports.Escalonamento_formularioDadosDetailsComponent = Escalonamento_formularioDadosDetailsComponent;
//# sourceMappingURL=escalonamento_formulario_dadosDetails.component.js.map