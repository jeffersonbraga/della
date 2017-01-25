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
var Programa_qualidade_1 = require('../../../modelo/Programa_qualidade');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Programa_qualidadeDadosEditComponent = (function () {
    function Programa_qualidadeDadosEditComponent(router, route, pesquisaService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Programa_qualidadeDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.programa_qualidade.Programa_qualidade"; var id = +params['id']; _this.programa_qualidade = new Programa_qualidade_1.Programa_qualidade(); _this.programa_qualidade.cd_programa_qualidade = id; o.objetoJson = _this.programa_qualidade; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Programa_qualidadeDadosEditComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a programa_qualidade. ';
    } this.programa_qualidade = result; };
    Programa_qualidadeDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Programa_qualidadeDadosEditComponent.prototype.onSubmit = function () { };
    Programa_qualidadeDadosEditComponent.prototype.onCancel = function (event) { event.preventDefault(); this.router.navigate(['/']); };
    Programa_qualidadeDadosEditComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'programa_qualidade-dados-edit', templateUrl: 'programa_qualidade_dadosEdit.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Programa_qualidadeDadosEditComponent);
    return Programa_qualidadeDadosEditComponent;
}());
exports.Programa_qualidadeDadosEditComponent = Programa_qualidadeDadosEditComponent;
//# sourceMappingURL=programa_qualidade_dadosEdit.component.js.map