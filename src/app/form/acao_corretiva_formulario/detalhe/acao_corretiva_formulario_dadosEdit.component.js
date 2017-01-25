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
var Acao_corretiva_formulario_1 = require('../../../modelo/Acao_corretiva_formulario');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Acao_corretiva_formularioDadosEditComponent = (function () {
    function Acao_corretiva_formularioDadosEditComponent(router, route, pesquisaService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Acao_corretiva_formularioDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.acao_corretiva_formulario.Acao_corretiva_formulario"; var id = +params['id']; _this.acao_corretiva_formulario = new Acao_corretiva_formulario_1.Acao_corretiva_formulario(); _this.acao_corretiva_formulario.cd_acao_corretiva_formulario = id; o.objetoJson = _this.acao_corretiva_formulario; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Acao_corretiva_formularioDadosEditComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a acao_corretiva_formulario. ';
    } this.acao_corretiva_formulario = result; };
    Acao_corretiva_formularioDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Acao_corretiva_formularioDadosEditComponent.prototype.onSubmit = function () { };
    Acao_corretiva_formularioDadosEditComponent.prototype.onCancel = function (event) { event.preventDefault(); this.router.navigate(['/']); };
    Acao_corretiva_formularioDadosEditComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'acao_corretiva_formulario-dados-edit', templateUrl: 'acao_corretiva_formulario_dadosEdit.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Acao_corretiva_formularioDadosEditComponent);
    return Acao_corretiva_formularioDadosEditComponent;
}());
exports.Acao_corretiva_formularioDadosEditComponent = Acao_corretiva_formularioDadosEditComponent;
//# sourceMappingURL=acao_corretiva_formulario_dadosEdit.component.js.map