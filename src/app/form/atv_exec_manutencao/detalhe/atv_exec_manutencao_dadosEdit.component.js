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
var Atv_exec_manutencao_1 = require('../../../modelo/Atv_exec_manutencao');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Atv_exec_manutencaoDadosEditComponent = (function () {
    function Atv_exec_manutencaoDadosEditComponent(router, route, pesquisaService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Atv_exec_manutencaoDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.atv_exec_manutencao.Atv_exec_manutencao"; var id = +params['id']; _this.atv_exec_manutencao = new Atv_exec_manutencao_1.Atv_exec_manutencao(); _this.atv_exec_manutencao.cd_atv_exec_manutencao = id; o.objetoJson = _this.atv_exec_manutencao; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Atv_exec_manutencaoDadosEditComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a atv_exec_manutencao. ';
    } this.atv_exec_manutencao = result; };
    Atv_exec_manutencaoDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Atv_exec_manutencaoDadosEditComponent.prototype.onSubmit = function () { };
    Atv_exec_manutencaoDadosEditComponent.prototype.onCancel = function (event) { event.preventDefault(); this.router.navigate(['/']); };
    Atv_exec_manutencaoDadosEditComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'atv_exec_manutencao-dados-edit', templateUrl: 'atv_exec_manutencao_dadosEdit.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Atv_exec_manutencaoDadosEditComponent);
    return Atv_exec_manutencaoDadosEditComponent;
}());
exports.Atv_exec_manutencaoDadosEditComponent = Atv_exec_manutencaoDadosEditComponent;
//# sourceMappingURL=atv_exec_manutencao_dadosEdit.component.js.map