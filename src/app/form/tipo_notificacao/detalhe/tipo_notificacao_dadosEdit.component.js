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
var Tipo_notificacao_1 = require('../../../modelo/Tipo_notificacao');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Tipo_notificacaoDadosEditComponent = (function () {
    function Tipo_notificacaoDadosEditComponent(router, route, pesquisaService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Tipo_notificacaoDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.tipo_notificacao.Tipo_notificacao"; var id = +params['id']; _this.tipo_notificacao = new Tipo_notificacao_1.Tipo_notificacao(); _this.tipo_notificacao.cd_tipo_notificacao = id; o.objetoJson = _this.tipo_notificacao; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Tipo_notificacaoDadosEditComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a tipo_notificacao. ';
    } this.tipo_notificacao = result; };
    Tipo_notificacaoDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Tipo_notificacaoDadosEditComponent.prototype.onSubmit = function () { };
    Tipo_notificacaoDadosEditComponent.prototype.onCancel = function (event) { event.preventDefault(); this.router.navigate(['/']); };
    Tipo_notificacaoDadosEditComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'tipo_notificacao-dados-edit', templateUrl: 'tipo_notificacao_dadosEdit.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Tipo_notificacaoDadosEditComponent);
    return Tipo_notificacaoDadosEditComponent;
}());
exports.Tipo_notificacaoDadosEditComponent = Tipo_notificacaoDadosEditComponent;
//# sourceMappingURL=tipo_notificacao_dadosEdit.component.js.map