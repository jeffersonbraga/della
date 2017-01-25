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
var Campo_agrupador_1 = require('../../../modelo/Campo_agrupador');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Campo_agrupadorDadosEditComponent = (function () {
    function Campo_agrupadorDadosEditComponent(router, route, pesquisaService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Campo_agrupadorDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.campo_agrupador.Campo_agrupador"; var id = +params['id']; _this.campo_agrupador = new Campo_agrupador_1.Campo_agrupador(); _this.campo_agrupador.cd_campo_agrupador = id; o.objetoJson = _this.campo_agrupador; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Campo_agrupadorDadosEditComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a campo_agrupador. ';
    } this.campo_agrupador = result; };
    Campo_agrupadorDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Campo_agrupadorDadosEditComponent.prototype.onSubmit = function () { };
    Campo_agrupadorDadosEditComponent.prototype.onCancel = function (event) { event.preventDefault(); this.router.navigate(['/']); };
    Campo_agrupadorDadosEditComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'campo_agrupador-dados-edit', templateUrl: 'campo_agrupador_dadosEdit.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Campo_agrupadorDadosEditComponent);
    return Campo_agrupadorDadosEditComponent;
}());
exports.Campo_agrupadorDadosEditComponent = Campo_agrupadorDadosEditComponent;
//# sourceMappingURL=campo_agrupador_dadosEdit.component.js.map