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
var Treinamento_funcao_1 = require('../../../modelo/Treinamento_funcao');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Treinamento_funcaoDadosEditComponent = (function () {
    function Treinamento_funcaoDadosEditComponent(router, route, pesquisaService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Treinamento_funcaoDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.treinamento_funcao.Treinamento_funcao"; var id = +params['id']; _this.treinamento_funcao = new Treinamento_funcao_1.Treinamento_funcao(); _this.treinamento_funcao.cd_treinamento_funcao = id; o.objetoJson = _this.treinamento_funcao; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Treinamento_funcaoDadosEditComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a treinamento_funcao. ';
    } this.treinamento_funcao = result; };
    Treinamento_funcaoDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Treinamento_funcaoDadosEditComponent.prototype.onSubmit = function () { };
    Treinamento_funcaoDadosEditComponent.prototype.onCancel = function (event) { event.preventDefault(); this.router.navigate(['/']); };
    Treinamento_funcaoDadosEditComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'treinamento_funcao-dados-edit', templateUrl: 'treinamento_funcao_dadosEdit.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Treinamento_funcaoDadosEditComponent);
    return Treinamento_funcaoDadosEditComponent;
}());
exports.Treinamento_funcaoDadosEditComponent = Treinamento_funcaoDadosEditComponent;
//# sourceMappingURL=treinamento_funcao_dadosEdit.component.js.map