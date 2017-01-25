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
var Reuniao_1 = require('../../../modelo/Reuniao');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var ReuniaoDadosDetailsComponent = (function () {
    function ReuniaoDadosDetailsComponent(route, pesquisaService) {
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    ReuniaoDadosDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.reuniao.Reuniao"; var id = +params['id']; _this.reuniao = new Reuniao_1.Reuniao(); _this.reuniao.cd_reuniao = id; o.objetoJson = _this.reuniao; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    ReuniaoDadosDetailsComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a reuniao. ';
    } this.reuniao = result; };
    ReuniaoDadosDetailsComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    ReuniaoDadosDetailsComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'reuniao-dados-details', templateUrl: 'reuniao_dadosDetails.component.html' }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], ReuniaoDadosDetailsComponent);
    return ReuniaoDadosDetailsComponent;
}());
exports.ReuniaoDadosDetailsComponent = ReuniaoDadosDetailsComponent;
//# sourceMappingURL=reuniao_dadosDetails.component.js.map