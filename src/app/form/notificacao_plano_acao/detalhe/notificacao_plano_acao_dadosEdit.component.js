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
var Notificacao_plano_acao_1 = require('../../../modelo/Notificacao_plano_acao');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Notificacao_plano_acaoDadosEditComponent = (function () {
    function Notificacao_plano_acaoDadosEditComponent(router, route, pesquisaService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Notificacao_plano_acaoDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.notificacao_plano_acao.Notificacao_plano_acao"; var id = +params['id']; _this.notificacao_plano_acao = new Notificacao_plano_acao_1.Notificacao_plano_acao(); _this.notificacao_plano_acao.cd_notificacao_plano_acao = id; o.objetoJson = _this.notificacao_plano_acao; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Notificacao_plano_acaoDadosEditComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a notificacao_plano_acao. ';
    } this.notificacao_plano_acao = result; };
    Notificacao_plano_acaoDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Notificacao_plano_acaoDadosEditComponent.prototype.onSubmit = function () { };
    Notificacao_plano_acaoDadosEditComponent.prototype.onCancel = function (event) { event.preventDefault(); this.router.navigate(['/']); };
    Notificacao_plano_acaoDadosEditComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'notificacao_plano_acao-dados-edit', templateUrl: 'notificacao_plano_acao_dadosEdit.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Notificacao_plano_acaoDadosEditComponent);
    return Notificacao_plano_acaoDadosEditComponent;
}());
exports.Notificacao_plano_acaoDadosEditComponent = Notificacao_plano_acaoDadosEditComponent;
//# sourceMappingURL=notificacao_plano_acao_dadosEdit.component.js.map