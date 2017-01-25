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
var Config_envio_indicadores_1 = require('../../../modelo/Config_envio_indicadores');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Config_envio_indicadoresDadosEditComponent = (function () {
    function Config_envio_indicadoresDadosEditComponent(router, route, pesquisaService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Config_envio_indicadoresDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.config_envio_indicadores.Config_envio_indicadores"; var id = +params['id']; _this.config_envio_indicadores = new Config_envio_indicadores_1.Config_envio_indicadores(); _this.config_envio_indicadores.cd_config_envio_indicadores = id; o.objetoJson = _this.config_envio_indicadores; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Config_envio_indicadoresDadosEditComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a config_envio_indicadores. ';
    } this.config_envio_indicadores = result; };
    Config_envio_indicadoresDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Config_envio_indicadoresDadosEditComponent.prototype.onSubmit = function () { };
    Config_envio_indicadoresDadosEditComponent.prototype.onCancel = function (event) { event.preventDefault(); this.router.navigate(['/']); };
    Config_envio_indicadoresDadosEditComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'config_envio_indicadores-dados-edit', templateUrl: 'config_envio_indicadores_dadosEdit.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Config_envio_indicadoresDadosEditComponent);
    return Config_envio_indicadoresDadosEditComponent;
}());
exports.Config_envio_indicadoresDadosEditComponent = Config_envio_indicadoresDadosEditComponent;
//# sourceMappingURL=config_envio_indicadores_dadosEdit.component.js.map