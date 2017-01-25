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
var Escalonamento_usuario_1 = require('../../../modelo/Escalonamento_usuario');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Escalonamento_usuarioDadosDetailsComponent = (function () {
    function Escalonamento_usuarioDadosDetailsComponent(route, pesquisaService) {
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Escalonamento_usuarioDadosDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.escalonamento_usuario.Escalonamento_usuario"; var id = +params['id']; _this.escalonamento_usuario = new Escalonamento_usuario_1.Escalonamento_usuario(); _this.escalonamento_usuario.cd_escalonamento_usuario = id; o.objetoJson = _this.escalonamento_usuario; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Escalonamento_usuarioDadosDetailsComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a escalonamento_usuario. ';
    } this.escalonamento_usuario = result; };
    Escalonamento_usuarioDadosDetailsComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Escalonamento_usuarioDadosDetailsComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'escalonamento_usuario-dados-details', templateUrl: 'escalonamento_usuario_dadosDetails.component.html' }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Escalonamento_usuarioDadosDetailsComponent);
    return Escalonamento_usuarioDadosDetailsComponent;
}());
exports.Escalonamento_usuarioDadosDetailsComponent = Escalonamento_usuarioDadosDetailsComponent;
//# sourceMappingURL=escalonamento_usuario_dadosDetails.component.js.map