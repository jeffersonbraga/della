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
var Doc_descritivo_treinamento_1 = require('../../../modelo/Doc_descritivo_treinamento');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Doc_descritivo_treinamentoDadosDetailsComponent = (function () {
    function Doc_descritivo_treinamentoDadosDetailsComponent(route, pesquisaService) {
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Doc_descritivo_treinamentoDadosDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.doc_descritivo_treinamento.Doc_descritivo_treinamento"; var id = +params['id']; _this.doc_descritivo_treinamento = new Doc_descritivo_treinamento_1.Doc_descritivo_treinamento(); _this.doc_descritivo_treinamento.cd_doc_descritivo_treinamento = id; o.objetoJson = _this.doc_descritivo_treinamento; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Doc_descritivo_treinamentoDadosDetailsComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a doc_descritivo_treinamento. ';
    } this.doc_descritivo_treinamento = result; };
    Doc_descritivo_treinamentoDadosDetailsComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Doc_descritivo_treinamentoDadosDetailsComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'doc_descritivo_treinamento-dados-details', templateUrl: 'doc_descritivo_treinamento_dadosDetails.component.html' }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Doc_descritivo_treinamentoDadosDetailsComponent);
    return Doc_descritivo_treinamentoDadosDetailsComponent;
}());
exports.Doc_descritivo_treinamentoDadosDetailsComponent = Doc_descritivo_treinamentoDadosDetailsComponent;
//# sourceMappingURL=doc_descritivo_treinamento_dadosDetails.component.js.map