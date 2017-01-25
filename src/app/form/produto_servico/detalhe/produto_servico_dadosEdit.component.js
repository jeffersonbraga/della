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
var Produto_servico_1 = require('../../../modelo/Produto_servico');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Produto_servicoDadosEditComponent = (function () {
    function Produto_servicoDadosEditComponent(router, route, pesquisaService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Produto_servicoDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.produto_servico.Produto_servico"; var id = +params['id']; _this.produto_servico = new Produto_servico_1.Produto_servico(); _this.produto_servico.cd_produto_servico = id; o.objetoJson = _this.produto_servico; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Produto_servicoDadosEditComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a produto_servico. ';
    } this.produto_servico = result; };
    Produto_servicoDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Produto_servicoDadosEditComponent.prototype.onSubmit = function () { };
    Produto_servicoDadosEditComponent.prototype.onCancel = function (event) { event.preventDefault(); this.router.navigate(['/']); };
    Produto_servicoDadosEditComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'produto_servico-dados-edit', templateUrl: 'produto_servico_dadosEdit.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Produto_servicoDadosEditComponent);
    return Produto_servicoDadosEditComponent;
}());
exports.Produto_servicoDadosEditComponent = Produto_servicoDadosEditComponent;
//# sourceMappingURL=produto_servico_dadosEdit.component.js.map