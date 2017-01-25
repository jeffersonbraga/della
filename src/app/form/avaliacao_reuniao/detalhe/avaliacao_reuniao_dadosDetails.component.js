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
var Avaliacao_reuniao_1 = require('../../../modelo/Avaliacao_reuniao');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Avaliacao_reuniaoDadosDetailsComponent = (function () {
    function Avaliacao_reuniaoDadosDetailsComponent(route, pesquisaService) {
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Avaliacao_reuniaoDadosDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.avaliacao_reuniao.Avaliacao_reuniao"; var id = +params['id']; _this.avaliacao_reuniao = new Avaliacao_reuniao_1.Avaliacao_reuniao(); _this.avaliacao_reuniao.cd_avaliacao_reuniao = id; o.objetoJson = _this.avaliacao_reuniao; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Avaliacao_reuniaoDadosDetailsComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a avaliacao_reuniao. ';
    } this.avaliacao_reuniao = result; };
    Avaliacao_reuniaoDadosDetailsComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Avaliacao_reuniaoDadosDetailsComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'avaliacao_reuniao-dados-details', templateUrl: 'avaliacao_reuniao_dadosDetails.component.html' }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Avaliacao_reuniaoDadosDetailsComponent);
    return Avaliacao_reuniaoDadosDetailsComponent;
}());
exports.Avaliacao_reuniaoDadosDetailsComponent = Avaliacao_reuniaoDadosDetailsComponent;
//# sourceMappingURL=avaliacao_reuniao_dadosDetails.component.js.map