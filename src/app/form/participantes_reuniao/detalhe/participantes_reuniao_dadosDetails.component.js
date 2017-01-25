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
var Participantes_reuniao_1 = require('../../../modelo/Participantes_reuniao');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Participantes_reuniaoDadosDetailsComponent = (function () {
    function Participantes_reuniaoDadosDetailsComponent(route, pesquisaService) {
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Participantes_reuniaoDadosDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.participantes_reuniao.Participantes_reuniao"; var id = +params['id']; _this.participantes_reuniao = new Participantes_reuniao_1.Participantes_reuniao(); _this.participantes_reuniao.cd_participantes_reuniao = id; o.objetoJson = _this.participantes_reuniao; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Participantes_reuniaoDadosDetailsComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a participantes_reuniao. ';
    } this.participantes_reuniao = result; };
    Participantes_reuniaoDadosDetailsComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Participantes_reuniaoDadosDetailsComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'participantes_reuniao-dados-details', templateUrl: 'participantes_reuniao_dadosDetails.component.html' }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Participantes_reuniaoDadosDetailsComponent);
    return Participantes_reuniaoDadosDetailsComponent;
}());
exports.Participantes_reuniaoDadosDetailsComponent = Participantes_reuniaoDadosDetailsComponent;
//# sourceMappingURL=participantes_reuniao_dadosDetails.component.js.map