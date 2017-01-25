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
var Modulo_indicadores_1 = require('../../../modelo/Modulo_indicadores');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Modulo_indicadoresDadosDetailsComponent = (function () {
    function Modulo_indicadoresDadosDetailsComponent(route, pesquisaService) {
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Modulo_indicadoresDadosDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.modulo_indicadores.Modulo_indicadores"; var id = +params['id']; _this.modulo_indicadores = new Modulo_indicadores_1.Modulo_indicadores(); _this.modulo_indicadores.cd_modulo_indicadores = id; o.objetoJson = _this.modulo_indicadores; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Modulo_indicadoresDadosDetailsComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a modulo_indicadores. ';
    } this.modulo_indicadores = result; };
    Modulo_indicadoresDadosDetailsComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Modulo_indicadoresDadosDetailsComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'modulo_indicadores-dados-details', templateUrl: 'modulo_indicadores_dadosDetails.component.html' }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Modulo_indicadoresDadosDetailsComponent);
    return Modulo_indicadoresDadosDetailsComponent;
}());
exports.Modulo_indicadoresDadosDetailsComponent = Modulo_indicadoresDadosDetailsComponent;
//# sourceMappingURL=modulo_indicadores_dadosDetails.component.js.map