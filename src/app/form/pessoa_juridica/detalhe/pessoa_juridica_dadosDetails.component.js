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
var Pessoa_juridica_1 = require('../../../modelo/Pessoa_juridica');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Pessoa_juridicaDadosDetailsComponent = (function () {
    function Pessoa_juridicaDadosDetailsComponent(route, pesquisaService) {
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Pessoa_juridicaDadosDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.pessoa_juridica.Pessoa_juridica"; var id = +params['id']; _this.pessoa_juridica = new Pessoa_juridica_1.Pessoa_juridica(); _this.pessoa_juridica.cd_pessoa_juridica = id; o.objetoJson = _this.pessoa_juridica; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Pessoa_juridicaDadosDetailsComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a pessoa_juridica. ';
    } this.pessoa_juridica = result; };
    Pessoa_juridicaDadosDetailsComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Pessoa_juridicaDadosDetailsComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'pessoa_juridica-dados-details', templateUrl: 'pessoa_juridica_dadosDetails.component.html' }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Pessoa_juridicaDadosDetailsComponent);
    return Pessoa_juridicaDadosDetailsComponent;
}());
exports.Pessoa_juridicaDadosDetailsComponent = Pessoa_juridicaDadosDetailsComponent;
//# sourceMappingURL=pessoa_juridica_dadosDetails.component.js.map