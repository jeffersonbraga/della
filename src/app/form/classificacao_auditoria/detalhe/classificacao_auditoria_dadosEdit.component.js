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
var Classificacao_auditoria_1 = require('../../../modelo/Classificacao_auditoria');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Classificacao_auditoriaDadosEditComponent = (function () {
    function Classificacao_auditoriaDadosEditComponent(router, route, pesquisaService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Classificacao_auditoriaDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.classificacao_auditoria.Classificacao_auditoria"; var id = +params['id']; _this.classificacao_auditoria = new Classificacao_auditoria_1.Classificacao_auditoria(); _this.classificacao_auditoria.cd_classificacao_auditoria = id; o.objetoJson = _this.classificacao_auditoria; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Classificacao_auditoriaDadosEditComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a classificacao_auditoria. ';
    } this.classificacao_auditoria = result; };
    Classificacao_auditoriaDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Classificacao_auditoriaDadosEditComponent.prototype.onSubmit = function () { };
    Classificacao_auditoriaDadosEditComponent.prototype.onCancel = function (event) { event.preventDefault(); this.router.navigate(['/']); };
    Classificacao_auditoriaDadosEditComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'classificacao_auditoria-dados-edit', templateUrl: 'classificacao_auditoria_dadosEdit.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Classificacao_auditoriaDadosEditComponent);
    return Classificacao_auditoriaDadosEditComponent;
}());
exports.Classificacao_auditoriaDadosEditComponent = Classificacao_auditoriaDadosEditComponent;
//# sourceMappingURL=classificacao_auditoria_dadosEdit.component.js.map