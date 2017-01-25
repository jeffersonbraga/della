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
var Indicador_customizado_1 = require('../../../modelo/Indicador_customizado');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Indicador_customizadoDadosEditComponent = (function () {
    function Indicador_customizadoDadosEditComponent(router, route, pesquisaService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Indicador_customizadoDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.indicador_customizado.Indicador_customizado"; var id = +params['id']; _this.indicador_customizado = new Indicador_customizado_1.Indicador_customizado(); _this.indicador_customizado.cd_indicador_customizado = id; o.objetoJson = _this.indicador_customizado; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Indicador_customizadoDadosEditComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a indicador_customizado. ';
    } this.indicador_customizado = result; };
    Indicador_customizadoDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Indicador_customizadoDadosEditComponent.prototype.onSubmit = function () { };
    Indicador_customizadoDadosEditComponent.prototype.onCancel = function (event) { event.preventDefault(); this.router.navigate(['/']); };
    Indicador_customizadoDadosEditComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'indicador_customizado-dados-edit', templateUrl: 'indicador_customizado_dadosEdit.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Indicador_customizadoDadosEditComponent);
    return Indicador_customizadoDadosEditComponent;
}());
exports.Indicador_customizadoDadosEditComponent = Indicador_customizadoDadosEditComponent;
//# sourceMappingURL=indicador_customizado_dadosEdit.component.js.map