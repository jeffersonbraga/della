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
var Ideia_reuniao_pic_1 = require('../../../modelo/Ideia_reuniao_pic');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Ideia_reuniao_picDadosDetailsComponent = (function () {
    function Ideia_reuniao_picDadosDetailsComponent(route, pesquisaService) {
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Ideia_reuniao_picDadosDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.ideia_reuniao_pic.Ideia_reuniao_pic"; var id = +params['id']; _this.ideia_reuniao_pic = new Ideia_reuniao_pic_1.Ideia_reuniao_pic(); _this.ideia_reuniao_pic.cd_ideia_reuniao_pic = id; o.objetoJson = _this.ideia_reuniao_pic; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Ideia_reuniao_picDadosDetailsComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a ideia_reuniao_pic. ';
    } this.ideia_reuniao_pic = result; };
    Ideia_reuniao_picDadosDetailsComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Ideia_reuniao_picDadosDetailsComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'ideia_reuniao_pic-dados-details', templateUrl: 'ideia_reuniao_pic_dadosDetails.component.html' }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Ideia_reuniao_picDadosDetailsComponent);
    return Ideia_reuniao_picDadosDetailsComponent;
}());
exports.Ideia_reuniao_picDadosDetailsComponent = Ideia_reuniao_picDadosDetailsComponent;
//# sourceMappingURL=ideia_reuniao_pic_dadosDetails.component.js.map