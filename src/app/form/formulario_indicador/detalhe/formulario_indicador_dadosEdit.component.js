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
var Formulario_indicador_1 = require('../../../modelo/Formulario_indicador');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Formulario_indicadorDadosEditComponent = (function () {
    function Formulario_indicadorDadosEditComponent(router, route, pesquisaService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Formulario_indicadorDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.formulario_indicador.Formulario_indicador"; var id = +params['id']; _this.formulario_indicador = new Formulario_indicador_1.Formulario_indicador(); _this.formulario_indicador.cd_formulario_indicador = id; o.objetoJson = _this.formulario_indicador; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Formulario_indicadorDadosEditComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a formulario_indicador. ';
    } this.formulario_indicador = result; };
    Formulario_indicadorDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Formulario_indicadorDadosEditComponent.prototype.onSubmit = function () { };
    Formulario_indicadorDadosEditComponent.prototype.onCancel = function (event) { event.preventDefault(); this.router.navigate(['/']); };
    Formulario_indicadorDadosEditComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'formulario_indicador-dados-edit', templateUrl: 'formulario_indicador_dadosEdit.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Formulario_indicadorDadosEditComponent);
    return Formulario_indicadorDadosEditComponent;
}());
exports.Formulario_indicadorDadosEditComponent = Formulario_indicadorDadosEditComponent;
//# sourceMappingURL=formulario_indicador_dadosEdit.component.js.map