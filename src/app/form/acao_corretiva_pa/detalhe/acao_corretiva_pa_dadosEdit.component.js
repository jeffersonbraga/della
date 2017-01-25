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
var Acao_corretiva_pa_1 = require('../../../modelo/Acao_corretiva_pa');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Acao_corretiva_paDadosEditComponent = (function () {
    function Acao_corretiva_paDadosEditComponent(router, route, pesquisaService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Acao_corretiva_paDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.acao_corretiva_pa.Acao_corretiva_pa"; var id = +params['id']; _this.acao_corretiva_pa = new Acao_corretiva_pa_1.Acao_corretiva_pa(); _this.acao_corretiva_pa.cd_acao_corretiva_pa = id; o.objetoJson = _this.acao_corretiva_pa; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Acao_corretiva_paDadosEditComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a acao_corretiva_pa. ';
    } this.acao_corretiva_pa = result; };
    Acao_corretiva_paDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Acao_corretiva_paDadosEditComponent.prototype.onSubmit = function () { };
    Acao_corretiva_paDadosEditComponent.prototype.onCancel = function (event) { event.preventDefault(); this.router.navigate(['/']); };
    Acao_corretiva_paDadosEditComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'acao_corretiva_pa-dados-edit', templateUrl: 'acao_corretiva_pa_dadosEdit.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Acao_corretiva_paDadosEditComponent);
    return Acao_corretiva_paDadosEditComponent;
}());
exports.Acao_corretiva_paDadosEditComponent = Acao_corretiva_paDadosEditComponent;
//# sourceMappingURL=acao_corretiva_pa_dadosEdit.component.js.map