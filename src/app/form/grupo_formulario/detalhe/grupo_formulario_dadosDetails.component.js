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
var Grupo_formulario_1 = require('../../../modelo/Grupo_formulario');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Grupo_formularioDadosDetailsComponent = (function () {
    function Grupo_formularioDadosDetailsComponent(route, pesquisaService) {
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Grupo_formularioDadosDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.grupo_formulario.Grupo_formulario"; var id = +params['id']; _this.grupo_formulario = new Grupo_formulario_1.Grupo_formulario(); _this.grupo_formulario.cd_grupo_formulario = id; o.objetoJson = _this.grupo_formulario; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Grupo_formularioDadosDetailsComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a grupo_formulario. ';
    } this.grupo_formulario = result; };
    Grupo_formularioDadosDetailsComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Grupo_formularioDadosDetailsComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'grupo_formulario-dados-details', templateUrl: 'grupo_formulario_dadosDetails.component.html' }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Grupo_formularioDadosDetailsComponent);
    return Grupo_formularioDadosDetailsComponent;
}());
exports.Grupo_formularioDadosDetailsComponent = Grupo_formularioDadosDetailsComponent;
//# sourceMappingURL=grupo_formulario_dadosDetails.component.js.map