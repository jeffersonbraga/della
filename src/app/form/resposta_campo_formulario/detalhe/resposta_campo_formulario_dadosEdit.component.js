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
var Resposta_campo_formulario_1 = require('../../../modelo/Resposta_campo_formulario');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Resposta_campo_formularioDadosEditComponent = (function () {
    function Resposta_campo_formularioDadosEditComponent(router, route, pesquisaService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Resposta_campo_formularioDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.resposta_campo_formulario.Resposta_campo_formulario"; var id = +params['id']; _this.resposta_campo_formulario = new Resposta_campo_formulario_1.Resposta_campo_formulario(); _this.resposta_campo_formulario.cd_resposta_campo_formulario = id; o.objetoJson = _this.resposta_campo_formulario; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Resposta_campo_formularioDadosEditComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a resposta_campo_formulario. ';
    } this.resposta_campo_formulario = result; };
    Resposta_campo_formularioDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Resposta_campo_formularioDadosEditComponent.prototype.onSubmit = function () { };
    Resposta_campo_formularioDadosEditComponent.prototype.onCancel = function (event) { event.preventDefault(); this.router.navigate(['/']); };
    Resposta_campo_formularioDadosEditComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'resposta_campo_formulario-dados-edit', templateUrl: 'resposta_campo_formulario_dadosEdit.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Resposta_campo_formularioDadosEditComponent);
    return Resposta_campo_formularioDadosEditComponent;
}());
exports.Resposta_campo_formularioDadosEditComponent = Resposta_campo_formularioDadosEditComponent;
//# sourceMappingURL=resposta_campo_formulario_dadosEdit.component.js.map