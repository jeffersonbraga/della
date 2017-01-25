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
var Descricao_funcional_1 = require('../../../modelo/Descricao_funcional');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Descricao_funcionalDadosDetailsComponent = (function () {
    function Descricao_funcionalDadosDetailsComponent(route, pesquisaService) {
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Descricao_funcionalDadosDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.descricao_funcional.Descricao_funcional"; var id = +params['id']; _this.descricao_funcional = new Descricao_funcional_1.Descricao_funcional(); _this.descricao_funcional.cd_descricao_funcional = id; o.objetoJson = _this.descricao_funcional; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Descricao_funcionalDadosDetailsComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a descricao_funcional. ';
    } this.descricao_funcional = result; };
    Descricao_funcionalDadosDetailsComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Descricao_funcionalDadosDetailsComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'descricao_funcional-dados-details', templateUrl: 'descricao_funcional_dadosDetails.component.html' }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Descricao_funcionalDadosDetailsComponent);
    return Descricao_funcionalDadosDetailsComponent;
}());
exports.Descricao_funcionalDadosDetailsComponent = Descricao_funcionalDadosDetailsComponent;
//# sourceMappingURL=descricao_funcional_dadosDetails.component.js.map