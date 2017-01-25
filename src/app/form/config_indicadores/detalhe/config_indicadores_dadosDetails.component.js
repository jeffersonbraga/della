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
var Config_indicadores_1 = require('../../../modelo/Config_indicadores');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Config_indicadoresDadosDetailsComponent = (function () {
    function Config_indicadoresDadosDetailsComponent(route, pesquisaService) {
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Config_indicadoresDadosDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.config_indicadores.Config_indicadores"; var id = +params['id']; _this.config_indicadores = new Config_indicadores_1.Config_indicadores(); _this.config_indicadores.cd_config_indicadores = id; o.objetoJson = _this.config_indicadores; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Config_indicadoresDadosDetailsComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a config_indicadores. ';
    } this.config_indicadores = result; };
    Config_indicadoresDadosDetailsComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Config_indicadoresDadosDetailsComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'config_indicadores-dados-details', templateUrl: 'config_indicadores_dadosDetails.component.html' }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Config_indicadoresDadosDetailsComponent);
    return Config_indicadoresDadosDetailsComponent;
}());
exports.Config_indicadoresDadosDetailsComponent = Config_indicadoresDadosDetailsComponent;
//# sourceMappingURL=config_indicadores_dadosDetails.component.js.map