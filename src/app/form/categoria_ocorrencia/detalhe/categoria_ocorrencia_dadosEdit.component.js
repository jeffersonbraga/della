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
var Categoria_ocorrencia_1 = require('../../../modelo/Categoria_ocorrencia');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Categoria_ocorrenciaDadosEditComponent = (function () {
    function Categoria_ocorrenciaDadosEditComponent(router, route, pesquisaService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Categoria_ocorrenciaDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.categoria_ocorrencia.Categoria_ocorrencia"; var id = +params['id']; _this.categoria_ocorrencia = new Categoria_ocorrencia_1.Categoria_ocorrencia(); _this.categoria_ocorrencia.cd_categoria_ocorrencia = id; o.objetoJson = _this.categoria_ocorrencia; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Categoria_ocorrenciaDadosEditComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a categoria_ocorrencia. ';
    } this.categoria_ocorrencia = result; };
    Categoria_ocorrenciaDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Categoria_ocorrenciaDadosEditComponent.prototype.onSubmit = function () { };
    Categoria_ocorrenciaDadosEditComponent.prototype.onCancel = function (event) { event.preventDefault(); this.router.navigate(['/']); };
    Categoria_ocorrenciaDadosEditComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'categoria_ocorrencia-dados-edit', templateUrl: 'categoria_ocorrencia_dadosEdit.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Categoria_ocorrenciaDadosEditComponent);
    return Categoria_ocorrenciaDadosEditComponent;
}());
exports.Categoria_ocorrenciaDadosEditComponent = Categoria_ocorrenciaDadosEditComponent;
//# sourceMappingURL=categoria_ocorrencia_dadosEdit.component.js.map