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
var Atividades_1 = require('../../../modelo/Atividades');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var AtividadesDadosDetailsComponent = (function () {
    function AtividadesDadosDetailsComponent(route, pesquisaService) {
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    AtividadesDadosDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.atividades.Atividades"; var id = +params['id']; _this.atividades = new Atividades_1.Atividades(); _this.atividades.cd_atividades = id; o.objetoJson = _this.atividades; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    AtividadesDadosDetailsComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a atividades. ';
    } this.atividades = result; };
    AtividadesDadosDetailsComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    AtividadesDadosDetailsComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'atividades-dados-details', templateUrl: 'atividades_dadosDetails.component.html' }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], AtividadesDadosDetailsComponent);
    return AtividadesDadosDetailsComponent;
}());
exports.AtividadesDadosDetailsComponent = AtividadesDadosDetailsComponent;
//# sourceMappingURL=atividades_dadosDetails.component.js.map