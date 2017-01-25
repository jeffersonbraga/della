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
var Resposta_exec_auditoria_1 = require('../../../modelo/Resposta_exec_auditoria');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Resposta_exec_auditoriaDadosDetailsComponent = (function () {
    function Resposta_exec_auditoriaDadosDetailsComponent(route, pesquisaService) {
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Resposta_exec_auditoriaDadosDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.resposta_exec_auditoria.Resposta_exec_auditoria"; var id = +params['id']; _this.resposta_exec_auditoria = new Resposta_exec_auditoria_1.Resposta_exec_auditoria(); _this.resposta_exec_auditoria.cd_resposta_exec_auditoria = id; o.objetoJson = _this.resposta_exec_auditoria; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Resposta_exec_auditoriaDadosDetailsComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a resposta_exec_auditoria. ';
    } this.resposta_exec_auditoria = result; };
    Resposta_exec_auditoriaDadosDetailsComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Resposta_exec_auditoriaDadosDetailsComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'resposta_exec_auditoria-dados-details', templateUrl: 'resposta_exec_auditoria_dadosDetails.component.html' }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Resposta_exec_auditoriaDadosDetailsComponent);
    return Resposta_exec_auditoriaDadosDetailsComponent;
}());
exports.Resposta_exec_auditoriaDadosDetailsComponent = Resposta_exec_auditoriaDadosDetailsComponent;
//# sourceMappingURL=resposta_exec_auditoria_dadosDetails.component.js.map