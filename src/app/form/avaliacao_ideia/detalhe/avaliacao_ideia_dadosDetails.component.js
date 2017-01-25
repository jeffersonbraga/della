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
var Avaliacao_ideia_1 = require('../../../modelo/Avaliacao_ideia');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Avaliacao_ideiaDadosDetailsComponent = (function () {
    function Avaliacao_ideiaDadosDetailsComponent(route, pesquisaService) {
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Avaliacao_ideiaDadosDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.avaliacao_ideia.Avaliacao_ideia"; var id = +params['id']; _this.avaliacao_ideia = new Avaliacao_ideia_1.Avaliacao_ideia(); _this.avaliacao_ideia.cd_avaliacao_ideia = id; o.objetoJson = _this.avaliacao_ideia; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Avaliacao_ideiaDadosDetailsComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a avaliacao_ideia. ';
    } this.avaliacao_ideia = result; };
    Avaliacao_ideiaDadosDetailsComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Avaliacao_ideiaDadosDetailsComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'avaliacao_ideia-dados-details', templateUrl: 'avaliacao_ideia_dadosDetails.component.html' }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Avaliacao_ideiaDadosDetailsComponent);
    return Avaliacao_ideiaDadosDetailsComponent;
}());
exports.Avaliacao_ideiaDadosDetailsComponent = Avaliacao_ideiaDadosDetailsComponent;
//# sourceMappingURL=avaliacao_ideia_dadosDetails.component.js.map