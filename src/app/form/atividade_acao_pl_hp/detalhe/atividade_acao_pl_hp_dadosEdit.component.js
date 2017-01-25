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
var Atividade_acao_pl_hp_1 = require('../../../modelo/Atividade_acao_pl_hp');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Atividade_acao_pl_hpDadosEditComponent = (function () {
    function Atividade_acao_pl_hpDadosEditComponent(router, route, pesquisaService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Atividade_acao_pl_hpDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.atividade_acao_pl_hp.Atividade_acao_pl_hp"; var id = +params['id']; _this.atividade_acao_pl_hp = new Atividade_acao_pl_hp_1.Atividade_acao_pl_hp(); _this.atividade_acao_pl_hp.cd_atividade_acao_pl_hp = id; o.objetoJson = _this.atividade_acao_pl_hp; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Atividade_acao_pl_hpDadosEditComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a atividade_acao_pl_hp. ';
    } this.atividade_acao_pl_hp = result; };
    Atividade_acao_pl_hpDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Atividade_acao_pl_hpDadosEditComponent.prototype.onSubmit = function () { };
    Atividade_acao_pl_hpDadosEditComponent.prototype.onCancel = function (event) { event.preventDefault(); this.router.navigate(['/']); };
    Atividade_acao_pl_hpDadosEditComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'atividade_acao_pl_hp-dados-edit', templateUrl: 'atividade_acao_pl_hp_dadosEdit.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Atividade_acao_pl_hpDadosEditComponent);
    return Atividade_acao_pl_hpDadosEditComponent;
}());
exports.Atividade_acao_pl_hpDadosEditComponent = Atividade_acao_pl_hpDadosEditComponent;
//# sourceMappingURL=atividade_acao_pl_hp_dadosEdit.component.js.map