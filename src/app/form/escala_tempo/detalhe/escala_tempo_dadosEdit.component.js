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
var Escala_tempo_1 = require('../../../modelo/Escala_tempo');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Escala_tempoDadosEditComponent = (function () {
    function Escala_tempoDadosEditComponent(router, route, pesquisaService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Escala_tempoDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.escala_tempo.Escala_tempo"; var id = +params['id']; _this.escala_tempo = new Escala_tempo_1.Escala_tempo(); _this.escala_tempo.cd_escala_tempo = id; o.objetoJson = _this.escala_tempo; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Escala_tempoDadosEditComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a escala_tempo. ';
    } this.escala_tempo = result; };
    Escala_tempoDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Escala_tempoDadosEditComponent.prototype.onSubmit = function () { };
    Escala_tempoDadosEditComponent.prototype.onCancel = function (event) { event.preventDefault(); this.router.navigate(['/']); };
    Escala_tempoDadosEditComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'escala_tempo-dados-edit', templateUrl: 'escala_tempo_dadosEdit.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Escala_tempoDadosEditComponent);
    return Escala_tempoDadosEditComponent;
}());
exports.Escala_tempoDadosEditComponent = Escala_tempoDadosEditComponent;
//# sourceMappingURL=escala_tempo_dadosEdit.component.js.map