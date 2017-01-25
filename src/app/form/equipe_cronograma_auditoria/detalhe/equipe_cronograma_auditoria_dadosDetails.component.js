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
var Equipe_cronograma_auditoria_1 = require('../../../modelo/Equipe_cronograma_auditoria');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Equipe_cronograma_auditoriaDadosDetailsComponent = (function () {
    function Equipe_cronograma_auditoriaDadosDetailsComponent(route, pesquisaService) {
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Equipe_cronograma_auditoriaDadosDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.equipe_cronograma_auditoria.Equipe_cronograma_auditoria"; var id = +params['id']; _this.equipe_cronograma_auditoria = new Equipe_cronograma_auditoria_1.Equipe_cronograma_auditoria(); _this.equipe_cronograma_auditoria.cd_equipe_cronograma_auditoria = id; o.objetoJson = _this.equipe_cronograma_auditoria; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Equipe_cronograma_auditoriaDadosDetailsComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a equipe_cronograma_auditoria. ';
    } this.equipe_cronograma_auditoria = result; };
    Equipe_cronograma_auditoriaDadosDetailsComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Equipe_cronograma_auditoriaDadosDetailsComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'equipe_cronograma_auditoria-dados-details', templateUrl: 'equipe_cronograma_auditoria_dadosDetails.component.html' }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Equipe_cronograma_auditoriaDadosDetailsComponent);
    return Equipe_cronograma_auditoriaDadosDetailsComponent;
}());
exports.Equipe_cronograma_auditoriaDadosDetailsComponent = Equipe_cronograma_auditoriaDadosDetailsComponent;
//# sourceMappingURL=equipe_cronograma_auditoria_dadosDetails.component.js.map