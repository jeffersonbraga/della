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
var Proposta_candidato_1 = require('../../../modelo/Proposta_candidato');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Proposta_candidatoDadosDetailsComponent = (function () {
    function Proposta_candidatoDadosDetailsComponent(route, pesquisaService) {
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Proposta_candidatoDadosDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.proposta_candidato.Proposta_candidato"; var id = +params['id']; _this.proposta_candidato = new Proposta_candidato_1.Proposta_candidato(); _this.proposta_candidato.cd_proposta = id; o.objetoJson = _this.proposta_candidato; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Proposta_candidatoDadosDetailsComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a proposta_candidato. ';
    } this.proposta_candidato = result; };
    Proposta_candidatoDadosDetailsComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Proposta_candidatoDadosDetailsComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'proposta_candidato-dados-details', templateUrl: 'proposta_candidato_dadosDetails.component.html' }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Proposta_candidatoDadosDetailsComponent);
    return Proposta_candidatoDadosDetailsComponent;
}());
exports.Proposta_candidatoDadosDetailsComponent = Proposta_candidatoDadosDetailsComponent;
//# sourceMappingURL=proposta_candidato_dadosDetails.component.js.map