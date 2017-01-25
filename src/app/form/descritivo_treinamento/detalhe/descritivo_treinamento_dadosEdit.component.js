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
var Descritivo_treinamento_1 = require('../../../modelo/Descritivo_treinamento');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Descritivo_treinamentoDadosEditComponent = (function () {
    function Descritivo_treinamentoDadosEditComponent(router, route, pesquisaService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Descritivo_treinamentoDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.descritivo_treinamento.Descritivo_treinamento"; var id = +params['id']; _this.descritivo_treinamento = new Descritivo_treinamento_1.Descritivo_treinamento(); _this.descritivo_treinamento.cd_descritivo_treinamento = id; o.objetoJson = _this.descritivo_treinamento; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Descritivo_treinamentoDadosEditComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a descritivo_treinamento. ';
    } this.descritivo_treinamento = result; };
    Descritivo_treinamentoDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Descritivo_treinamentoDadosEditComponent.prototype.onSubmit = function () { };
    Descritivo_treinamentoDadosEditComponent.prototype.onCancel = function (event) { event.preventDefault(); this.router.navigate(['/']); };
    Descritivo_treinamentoDadosEditComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'descritivo_treinamento-dados-edit', templateUrl: 'descritivo_treinamento_dadosEdit.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Descritivo_treinamentoDadosEditComponent);
    return Descritivo_treinamentoDadosEditComponent;
}());
exports.Descritivo_treinamentoDadosEditComponent = Descritivo_treinamentoDadosEditComponent;
//# sourceMappingURL=descritivo_treinamento_dadosEdit.component.js.map