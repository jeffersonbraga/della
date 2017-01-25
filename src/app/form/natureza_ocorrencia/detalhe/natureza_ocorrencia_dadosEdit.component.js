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
var Natureza_ocorrencia_1 = require('../../../modelo/Natureza_ocorrencia');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Natureza_ocorrenciaDadosEditComponent = (function () {
    function Natureza_ocorrenciaDadosEditComponent(router, route, pesquisaService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Natureza_ocorrenciaDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.natureza_ocorrencia.Natureza_ocorrencia"; var id = +params['id']; _this.natureza_ocorrencia = new Natureza_ocorrencia_1.Natureza_ocorrencia(); _this.natureza_ocorrencia.cd_natureza_ocorrencia = id; o.objetoJson = _this.natureza_ocorrencia; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Natureza_ocorrenciaDadosEditComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a natureza_ocorrencia. ';
    } this.natureza_ocorrencia = result; };
    Natureza_ocorrenciaDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Natureza_ocorrenciaDadosEditComponent.prototype.onSubmit = function () { };
    Natureza_ocorrenciaDadosEditComponent.prototype.onCancel = function (event) { event.preventDefault(); this.router.navigate(['/']); };
    Natureza_ocorrenciaDadosEditComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'natureza_ocorrencia-dados-edit', templateUrl: 'natureza_ocorrencia_dadosEdit.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Natureza_ocorrenciaDadosEditComponent);
    return Natureza_ocorrenciaDadosEditComponent;
}());
exports.Natureza_ocorrenciaDadosEditComponent = Natureza_ocorrenciaDadosEditComponent;
//# sourceMappingURL=natureza_ocorrencia_dadosEdit.component.js.map