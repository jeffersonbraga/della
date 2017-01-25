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
var Permissao_padrao_1 = require('../../../modelo/Permissao_padrao');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Permissao_padraoDadosEditComponent = (function () {
    function Permissao_padraoDadosEditComponent(router, route, pesquisaService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Permissao_padraoDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.permissao_padrao.Permissao_padrao"; var id = +params['id']; _this.permissao_padrao = new Permissao_padrao_1.Permissao_padrao(); _this.permissao_padrao.cd_permissao_padrao = id; o.objetoJson = _this.permissao_padrao; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Permissao_padraoDadosEditComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a permissao_padrao. ';
    } this.permissao_padrao = result; };
    Permissao_padraoDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Permissao_padraoDadosEditComponent.prototype.onSubmit = function () { };
    Permissao_padraoDadosEditComponent.prototype.onCancel = function (event) { event.preventDefault(); this.router.navigate(['/']); };
    Permissao_padraoDadosEditComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'permissao_padrao-dados-edit', templateUrl: 'permissao_padrao_dadosEdit.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Permissao_padraoDadosEditComponent);
    return Permissao_padraoDadosEditComponent;
}());
exports.Permissao_padraoDadosEditComponent = Permissao_padraoDadosEditComponent;
//# sourceMappingURL=permissao_padrao_dadosEdit.component.js.map