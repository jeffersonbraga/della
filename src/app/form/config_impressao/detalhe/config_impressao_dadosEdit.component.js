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
var Config_impressao_1 = require('../../../modelo/Config_impressao');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Config_impressaoDadosEditComponent = (function () {
    function Config_impressaoDadosEditComponent(router, route, pesquisaService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Config_impressaoDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.config_impressao.Config_impressao"; var id = +params['id']; _this.config_impressao = new Config_impressao_1.Config_impressao(); _this.config_impressao.cd_config_impressao = id; o.objetoJson = _this.config_impressao; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Config_impressaoDadosEditComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a config_impressao. ';
    } this.config_impressao = result; };
    Config_impressaoDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Config_impressaoDadosEditComponent.prototype.onSubmit = function () { };
    Config_impressaoDadosEditComponent.prototype.onCancel = function (event) { event.preventDefault(); this.router.navigate(['/']); };
    Config_impressaoDadosEditComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'config_impressao-dados-edit', templateUrl: 'config_impressao_dadosEdit.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Config_impressaoDadosEditComponent);
    return Config_impressaoDadosEditComponent;
}());
exports.Config_impressaoDadosEditComponent = Config_impressaoDadosEditComponent;
//# sourceMappingURL=config_impressao_dadosEdit.component.js.map