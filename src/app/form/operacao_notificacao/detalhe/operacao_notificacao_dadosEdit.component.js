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
var Operacao_notificacao_1 = require('../../../modelo/Operacao_notificacao');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Operacao_notificacaoDadosEditComponent = (function () {
    function Operacao_notificacaoDadosEditComponent(router, route, pesquisaService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Operacao_notificacaoDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.operacao_notificacao.Operacao_notificacao"; var id = +params['id']; _this.operacao_notificacao = new Operacao_notificacao_1.Operacao_notificacao(); _this.operacao_notificacao.cd_operacao_notificacao = id; o.objetoJson = _this.operacao_notificacao; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Operacao_notificacaoDadosEditComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a operacao_notificacao. ';
    } this.operacao_notificacao = result; };
    Operacao_notificacaoDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Operacao_notificacaoDadosEditComponent.prototype.onSubmit = function () { };
    Operacao_notificacaoDadosEditComponent.prototype.onCancel = function (event) { event.preventDefault(); this.router.navigate(['/']); };
    Operacao_notificacaoDadosEditComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'operacao_notificacao-dados-edit', templateUrl: 'operacao_notificacao_dadosEdit.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Operacao_notificacaoDadosEditComponent);
    return Operacao_notificacaoDadosEditComponent;
}());
exports.Operacao_notificacaoDadosEditComponent = Operacao_notificacaoDadosEditComponent;
//# sourceMappingURL=operacao_notificacao_dadosEdit.component.js.map