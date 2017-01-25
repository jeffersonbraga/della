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
var Manutencao_preventiva_1 = require('../../../modelo/Manutencao_preventiva');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Manutencao_preventivaDadosEditComponent = (function () {
    function Manutencao_preventivaDadosEditComponent(router, route, pesquisaService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Manutencao_preventivaDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.manutencao_preventiva.Manutencao_preventiva"; var id = +params['id']; _this.manutencao_preventiva = new Manutencao_preventiva_1.Manutencao_preventiva(); _this.manutencao_preventiva.cd_manutencao_preventiva = id; o.objetoJson = _this.manutencao_preventiva; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Manutencao_preventivaDadosEditComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a manutencao_preventiva. ';
    } this.manutencao_preventiva = result; };
    Manutencao_preventivaDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Manutencao_preventivaDadosEditComponent.prototype.onSubmit = function () { };
    Manutencao_preventivaDadosEditComponent.prototype.onCancel = function (event) { event.preventDefault(); this.router.navigate(['/']); };
    Manutencao_preventivaDadosEditComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'manutencao_preventiva-dados-edit', templateUrl: 'manutencao_preventiva_dadosEdit.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Manutencao_preventivaDadosEditComponent);
    return Manutencao_preventivaDadosEditComponent;
}());
exports.Manutencao_preventivaDadosEditComponent = Manutencao_preventivaDadosEditComponent;
//# sourceMappingURL=manutencao_preventiva_dadosEdit.component.js.map