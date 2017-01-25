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
var Acao_preventiva_pa_1 = require('../../../modelo/Acao_preventiva_pa');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Acao_preventiva_paDadosEditComponent = (function () {
    function Acao_preventiva_paDadosEditComponent(router, route, pesquisaService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Acao_preventiva_paDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.acao_preventiva_pa.Acao_preventiva_pa"; var id = +params['id']; _this.acao_preventiva_pa = new Acao_preventiva_pa_1.Acao_preventiva_pa(); _this.acao_preventiva_pa.cd_acao_preventiva_pa = id; o.objetoJson = _this.acao_preventiva_pa; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Acao_preventiva_paDadosEditComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a acao_preventiva_pa. ';
    } this.acao_preventiva_pa = result; };
    Acao_preventiva_paDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Acao_preventiva_paDadosEditComponent.prototype.onSubmit = function () { };
    Acao_preventiva_paDadosEditComponent.prototype.onCancel = function (event) { event.preventDefault(); this.router.navigate(['/']); };
    Acao_preventiva_paDadosEditComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'acao_preventiva_pa-dados-edit', templateUrl: 'acao_preventiva_pa_dadosEdit.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Acao_preventiva_paDadosEditComponent);
    return Acao_preventiva_paDadosEditComponent;
}());
exports.Acao_preventiva_paDadosEditComponent = Acao_preventiva_paDadosEditComponent;
//# sourceMappingURL=acao_preventiva_pa_dadosEdit.component.js.map