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
var Registro_treinamento_1 = require('../../../modelo/Registro_treinamento');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Registro_treinamentoDadosEditComponent = (function () {
    function Registro_treinamentoDadosEditComponent(router, route, pesquisaService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Registro_treinamentoDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.registro_treinamento.Registro_treinamento"; var id = +params['id']; _this.registro_treinamento = new Registro_treinamento_1.Registro_treinamento(); _this.registro_treinamento.cd_registro_treinamento = id; o.objetoJson = _this.registro_treinamento; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Registro_treinamentoDadosEditComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a registro_treinamento. ';
    } this.registro_treinamento = result; };
    Registro_treinamentoDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Registro_treinamentoDadosEditComponent.prototype.onSubmit = function () { };
    Registro_treinamentoDadosEditComponent.prototype.onCancel = function (event) { event.preventDefault(); this.router.navigate(['/']); };
    Registro_treinamentoDadosEditComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'registro_treinamento-dados-edit', templateUrl: 'registro_treinamento_dadosEdit.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Registro_treinamentoDadosEditComponent);
    return Registro_treinamentoDadosEditComponent;
}());
exports.Registro_treinamentoDadosEditComponent = Registro_treinamentoDadosEditComponent;
//# sourceMappingURL=registro_treinamento_dadosEdit.component.js.map