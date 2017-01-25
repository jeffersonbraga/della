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
var Plano_acao_nc_1 = require('../../../modelo/Plano_acao_nc');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Plano_acao_ncDadosEditComponent = (function () {
    function Plano_acao_ncDadosEditComponent(router, route, pesquisaService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Plano_acao_ncDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.plano_acao_nc.Plano_acao_nc"; var id = +params['id']; _this.plano_acao_nc = new Plano_acao_nc_1.Plano_acao_nc(); _this.plano_acao_nc.cd_plano_acao_nc = id; o.objetoJson = _this.plano_acao_nc; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Plano_acao_ncDadosEditComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a plano_acao_nc. ';
    } this.plano_acao_nc = result; };
    Plano_acao_ncDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Plano_acao_ncDadosEditComponent.prototype.onSubmit = function () { };
    Plano_acao_ncDadosEditComponent.prototype.onCancel = function (event) { event.preventDefault(); this.router.navigate(['/']); };
    Plano_acao_ncDadosEditComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'plano_acao_nc-dados-edit', templateUrl: 'plano_acao_nc_dadosEdit.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Plano_acao_ncDadosEditComponent);
    return Plano_acao_ncDadosEditComponent;
}());
exports.Plano_acao_ncDadosEditComponent = Plano_acao_ncDadosEditComponent;
//# sourceMappingURL=plano_acao_nc_dadosEdit.component.js.map