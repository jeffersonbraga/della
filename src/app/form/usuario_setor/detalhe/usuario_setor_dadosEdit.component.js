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
var Usuario_setor_1 = require('../../../modelo/Usuario_setor');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Usuario_setorDadosEditComponent = (function () {
    function Usuario_setorDadosEditComponent(router, route, pesquisaService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Usuario_setorDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.usuario_setor.Usuario_setor"; var id = +params['id']; _this.usuario_setor = new Usuario_setor_1.Usuario_setor(); _this.usuario_setor.cd_usuario_setor = id; o.objetoJson = _this.usuario_setor; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Usuario_setorDadosEditComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a usuario_setor. ';
    } this.usuario_setor = result; };
    Usuario_setorDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Usuario_setorDadosEditComponent.prototype.onSubmit = function () { };
    Usuario_setorDadosEditComponent.prototype.onCancel = function (event) { event.preventDefault(); this.router.navigate(['/']); };
    Usuario_setorDadosEditComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'usuario_setor-dados-edit', templateUrl: 'usuario_setor_dadosEdit.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Usuario_setorDadosEditComponent);
    return Usuario_setorDadosEditComponent;
}());
exports.Usuario_setorDadosEditComponent = Usuario_setorDadosEditComponent;
//# sourceMappingURL=usuario_setor_dadosEdit.component.js.map