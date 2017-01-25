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
var Causa_efeito_1 = require('../../../modelo/Causa_efeito');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Causa_efeitoDadosEditComponent = (function () {
    function Causa_efeitoDadosEditComponent(router, route, pesquisaService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Causa_efeitoDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.causa_efeito.Causa_efeito"; var id = +params['id']; _this.causa_efeito = new Causa_efeito_1.Causa_efeito(); _this.causa_efeito.cd_causa_efeito = id; o.objetoJson = _this.causa_efeito; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Causa_efeitoDadosEditComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a causa_efeito. ';
    } this.causa_efeito = result; };
    Causa_efeitoDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Causa_efeitoDadosEditComponent.prototype.onSubmit = function () { };
    Causa_efeitoDadosEditComponent.prototype.onCancel = function (event) { event.preventDefault(); this.router.navigate(['/']); };
    Causa_efeitoDadosEditComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'causa_efeito-dados-edit', templateUrl: 'causa_efeito_dadosEdit.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Causa_efeitoDadosEditComponent);
    return Causa_efeitoDadosEditComponent;
}());
exports.Causa_efeitoDadosEditComponent = Causa_efeitoDadosEditComponent;
//# sourceMappingURL=causa_efeito_dadosEdit.component.js.map