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
var Funcao_usuario_1 = require('../../../modelo/Funcao_usuario');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Funcao_usuarioDadosEditComponent = (function () {
    function Funcao_usuarioDadosEditComponent(router, route, pesquisaService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Funcao_usuarioDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.funcao_usuario.Funcao_usuario"; var id = +params['id']; _this.funcao_usuario = new Funcao_usuario_1.Funcao_usuario(); _this.funcao_usuario.cd_funcao_usuario = id; o.objetoJson = _this.funcao_usuario; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Funcao_usuarioDadosEditComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a funcao_usuario. ';
    } this.funcao_usuario = result; };
    Funcao_usuarioDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Funcao_usuarioDadosEditComponent.prototype.onSubmit = function () { };
    Funcao_usuarioDadosEditComponent.prototype.onCancel = function (event) { event.preventDefault(); this.router.navigate(['/']); };
    Funcao_usuarioDadosEditComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'funcao_usuario-dados-edit', templateUrl: 'funcao_usuario_dadosEdit.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Funcao_usuarioDadosEditComponent);
    return Funcao_usuarioDadosEditComponent;
}());
exports.Funcao_usuarioDadosEditComponent = Funcao_usuarioDadosEditComponent;
//# sourceMappingURL=funcao_usuario_dadosEdit.component.js.map