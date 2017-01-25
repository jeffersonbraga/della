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
var Classificacao_ouvidoria_1 = require('../../../modelo/Classificacao_ouvidoria');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Classificacao_ouvidoriaDadosEditComponent = (function () {
    function Classificacao_ouvidoriaDadosEditComponent(router, route, pesquisaService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Classificacao_ouvidoriaDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.classificacao_ouvidoria.Classificacao_ouvidoria"; var id = +params['id']; _this.classificacao_ouvidoria = new Classificacao_ouvidoria_1.Classificacao_ouvidoria(); _this.classificacao_ouvidoria.cd_classificacao_ouvidoria = id; o.objetoJson = _this.classificacao_ouvidoria; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Classificacao_ouvidoriaDadosEditComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a classificacao_ouvidoria. ';
    } this.classificacao_ouvidoria = result; };
    Classificacao_ouvidoriaDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Classificacao_ouvidoriaDadosEditComponent.prototype.onSubmit = function () { };
    Classificacao_ouvidoriaDadosEditComponent.prototype.onCancel = function (event) { event.preventDefault(); this.router.navigate(['/']); };
    Classificacao_ouvidoriaDadosEditComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'classificacao_ouvidoria-dados-edit', templateUrl: 'classificacao_ouvidoria_dadosEdit.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Classificacao_ouvidoriaDadosEditComponent);
    return Classificacao_ouvidoriaDadosEditComponent;
}());
exports.Classificacao_ouvidoriaDadosEditComponent = Classificacao_ouvidoriaDadosEditComponent;
//# sourceMappingURL=classificacao_ouvidoria_dadosEdit.component.js.map