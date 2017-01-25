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
var Notificacao_automatica_1 = require('../../../modelo/Notificacao_automatica');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Notificacao_automaticaDadosDetailsComponent = (function () {
    function Notificacao_automaticaDadosDetailsComponent(route, pesquisaService) {
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Notificacao_automaticaDadosDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.notificacao_automatica.Notificacao_automatica"; var id = +params['id']; _this.notificacao_automatica = new Notificacao_automatica_1.Notificacao_automatica(); _this.notificacao_automatica.cd_notificacao_automatica = id; o.objetoJson = _this.notificacao_automatica; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Notificacao_automaticaDadosDetailsComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a notificacao_automatica. ';
    } this.notificacao_automatica = result; };
    Notificacao_automaticaDadosDetailsComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Notificacao_automaticaDadosDetailsComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'notificacao_automatica-dados-details', templateUrl: 'notificacao_automatica_dadosDetails.component.html' }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Notificacao_automaticaDadosDetailsComponent);
    return Notificacao_automaticaDadosDetailsComponent;
}());
exports.Notificacao_automaticaDadosDetailsComponent = Notificacao_automaticaDadosDetailsComponent;
//# sourceMappingURL=notificacao_automatica_dadosDetails.component.js.map