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
var Profissao_1 = require('../../../modelo/Profissao');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var ProfissaoDadosEditComponent = (function () {
    function ProfissaoDadosEditComponent(router, route, pesquisaService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    ProfissaoDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.profissao.Profissao"; var id = +params['id']; _this.profissao = new Profissao_1.Profissao(); _this.profissao.cd_profissao = id; o.objetoJson = _this.profissao; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    ProfissaoDadosEditComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a profissao. ';
    } this.profissao = result; };
    ProfissaoDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    ProfissaoDadosEditComponent.prototype.onSubmit = function () { };
    ProfissaoDadosEditComponent.prototype.onCancel = function (event) { event.preventDefault(); this.router.navigate(['/']); };
    ProfissaoDadosEditComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'profissao-dados-edit', templateUrl: 'profissao_dadosEdit.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], ProfissaoDadosEditComponent);
    return ProfissaoDadosEditComponent;
}());
exports.ProfissaoDadosEditComponent = ProfissaoDadosEditComponent;
//# sourceMappingURL=profissao_dadosEdit.component.js.map