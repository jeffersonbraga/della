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
var Revisao_programa_qualidade_1 = require('../../../modelo/Revisao_programa_qualidade');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Revisao_programa_qualidadeDadosDetailsComponent = (function () {
    function Revisao_programa_qualidadeDadosDetailsComponent(route, pesquisaService) {
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Revisao_programa_qualidadeDadosDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.revisao_programa_qualidade.Revisao_programa_qualidade"; var id = +params['id']; _this.revisao_programa_qualidade = new Revisao_programa_qualidade_1.Revisao_programa_qualidade(); _this.revisao_programa_qualidade.cd_revisao_programa_qualidade = id; o.objetoJson = _this.revisao_programa_qualidade; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Revisao_programa_qualidadeDadosDetailsComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a revisao_programa_qualidade. ';
    } this.revisao_programa_qualidade = result; };
    Revisao_programa_qualidadeDadosDetailsComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Revisao_programa_qualidadeDadosDetailsComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'revisao_programa_qualidade-dados-details', templateUrl: 'revisao_programa_qualidade_dadosDetails.component.html' }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Revisao_programa_qualidadeDadosDetailsComponent);
    return Revisao_programa_qualidadeDadosDetailsComponent;
}());
exports.Revisao_programa_qualidadeDadosDetailsComponent = Revisao_programa_qualidadeDadosDetailsComponent;
//# sourceMappingURL=revisao_programa_qualidade_dadosDetails.component.js.map