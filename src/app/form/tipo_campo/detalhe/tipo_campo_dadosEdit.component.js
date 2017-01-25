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
var Tipo_campo_1 = require('../../../modelo/Tipo_campo');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Tipo_campoDadosEditComponent = (function () {
    function Tipo_campoDadosEditComponent(router, route, pesquisaService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Tipo_campoDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.tipo_campo.Tipo_campo"; var id = +params['id']; _this.tipo_campo = new Tipo_campo_1.Tipo_campo(); _this.tipo_campo.cd_tipo_campo = id; o.objetoJson = _this.tipo_campo; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Tipo_campoDadosEditComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a tipo_campo. ';
    } this.tipo_campo = result; };
    Tipo_campoDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Tipo_campoDadosEditComponent.prototype.onSubmit = function () { };
    Tipo_campoDadosEditComponent.prototype.onCancel = function (event) { event.preventDefault(); this.router.navigate(['/']); };
    Tipo_campoDadosEditComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'tipo_campo-dados-edit', templateUrl: 'tipo_campo_dadosEdit.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Tipo_campoDadosEditComponent);
    return Tipo_campoDadosEditComponent;
}());
exports.Tipo_campoDadosEditComponent = Tipo_campoDadosEditComponent;
//# sourceMappingURL=tipo_campo_dadosEdit.component.js.map