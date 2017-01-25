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
var Lista_modulos_1 = require('../../../modelo/Lista_modulos');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Lista_modulosDadosDetailsComponent = (function () {
    function Lista_modulosDadosDetailsComponent(route, pesquisaService) {
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Lista_modulosDadosDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.lista_modulos.Lista_modulos"; var id = +params['id']; _this.lista_modulos = new Lista_modulos_1.Lista_modulos(); _this.lista_modulos.cd_lista_modulos = id; o.objetoJson = _this.lista_modulos; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Lista_modulosDadosDetailsComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a lista_modulos. ';
    } this.lista_modulos = result; };
    Lista_modulosDadosDetailsComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Lista_modulosDadosDetailsComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'lista_modulos-dados-details', templateUrl: 'lista_modulos_dadosDetails.component.html' }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Lista_modulosDadosDetailsComponent);
    return Lista_modulosDadosDetailsComponent;
}());
exports.Lista_modulosDadosDetailsComponent = Lista_modulosDadosDetailsComponent;
//# sourceMappingURL=lista_modulos_dadosDetails.component.js.map