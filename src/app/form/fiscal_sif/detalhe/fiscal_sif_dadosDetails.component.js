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
var Fiscal_sif_1 = require('../../../modelo/Fiscal_sif');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Fiscal_sifDadosDetailsComponent = (function () {
    function Fiscal_sifDadosDetailsComponent(route, pesquisaService) {
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Fiscal_sifDadosDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.fiscal_sif.Fiscal_sif"; var id = +params['id']; _this.fiscal_sif = new Fiscal_sif_1.Fiscal_sif(); _this.fiscal_sif.cd_fiscal_sif = id; o.objetoJson = _this.fiscal_sif; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Fiscal_sifDadosDetailsComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a fiscal_sif. ';
    } this.fiscal_sif = result; };
    Fiscal_sifDadosDetailsComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Fiscal_sifDadosDetailsComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'fiscal_sif-dados-details', templateUrl: 'fiscal_sif_dadosDetails.component.html' }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Fiscal_sifDadosDetailsComponent);
    return Fiscal_sifDadosDetailsComponent;
}());
exports.Fiscal_sifDadosDetailsComponent = Fiscal_sifDadosDetailsComponent;
//# sourceMappingURL=fiscal_sif_dadosDetails.component.js.map