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
var Tipo_campo_1 = require('../../../modelo/Tipo_campo');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Tipo_campoDadosDetailsComponent = (function () {
    function Tipo_campoDadosDetailsComponent(route, pesquisaService) {
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Tipo_campoDadosDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.tipo_campo.Tipo_campo"; var id = +params['id']; _this.tipo_campo = new Tipo_campo_1.Tipo_campo(); _this.tipo_campo.cd_tipo_campo = id; o.objetoJson = _this.tipo_campo; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Tipo_campoDadosDetailsComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a tipo_campo. ';
    } this.tipo_campo = result; };
    Tipo_campoDadosDetailsComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Tipo_campoDadosDetailsComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'tipo_campo-dados-details', templateUrl: 'tipo_campo_dadosDetails.component.html' }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Tipo_campoDadosDetailsComponent);
    return Tipo_campoDadosDetailsComponent;
}());
exports.Tipo_campoDadosDetailsComponent = Tipo_campoDadosDetailsComponent;
//# sourceMappingURL=tipo_campo_dadosDetails.component.js.map