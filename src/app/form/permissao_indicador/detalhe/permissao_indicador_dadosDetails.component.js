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
var Permissao_indicador_1 = require('../../../modelo/Permissao_indicador');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Permissao_indicadorDadosDetailsComponent = (function () {
    function Permissao_indicadorDadosDetailsComponent(route, pesquisaService) {
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Permissao_indicadorDadosDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.permissao_indicador.Permissao_indicador"; var id = +params['id']; _this.permissao_indicador = new Permissao_indicador_1.Permissao_indicador(); _this.permissao_indicador.cd_permissao_indicador = id; o.objetoJson = _this.permissao_indicador; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Permissao_indicadorDadosDetailsComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a permissao_indicador. ';
    } this.permissao_indicador = result; };
    Permissao_indicadorDadosDetailsComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Permissao_indicadorDadosDetailsComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'permissao_indicador-dados-details', templateUrl: 'permissao_indicador_dadosDetails.component.html' }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Permissao_indicadorDadosDetailsComponent);
    return Permissao_indicadorDadosDetailsComponent;
}());
exports.Permissao_indicadorDadosDetailsComponent = Permissao_indicadorDadosDetailsComponent;
//# sourceMappingURL=permissao_indicador_dadosDetails.component.js.map