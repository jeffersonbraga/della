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
var Cronograma_auditoria_1 = require('../../../modelo/Cronograma_auditoria');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Cronograma_auditoriaDadosDetailsComponent = (function () {
    function Cronograma_auditoriaDadosDetailsComponent(route, pesquisaService) {
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Cronograma_auditoriaDadosDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.cronograma_auditoria.Cronograma_auditoria"; var id = +params['id']; _this.cronograma_auditoria = new Cronograma_auditoria_1.Cronograma_auditoria(); _this.cronograma_auditoria.cd_cronograma_auditoria = id; o.objetoJson = _this.cronograma_auditoria; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Cronograma_auditoriaDadosDetailsComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a cronograma_auditoria. ';
    } this.cronograma_auditoria = result; };
    Cronograma_auditoriaDadosDetailsComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Cronograma_auditoriaDadosDetailsComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'cronograma_auditoria-dados-details', templateUrl: 'cronograma_auditoria_dadosDetails.component.html' }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Cronograma_auditoriaDadosDetailsComponent);
    return Cronograma_auditoriaDadosDetailsComponent;
}());
exports.Cronograma_auditoriaDadosDetailsComponent = Cronograma_auditoriaDadosDetailsComponent;
//# sourceMappingURL=cronograma_auditoria_dadosDetails.component.js.map