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
var Config_campo_pesquisa_1 = require('../../../modelo/Config_campo_pesquisa');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Config_campo_pesquisaComponent = (function () {
    function Config_campo_pesquisaComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = '';
        this.listaDados = [];
    }
    Config_campo_pesquisaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.config_campo_pesquisaAux = new Config_campo_pesquisa_1.Config_campo_pesquisa();
        var dataAux = new ObjetoVirtual_1.ObjetoVirtual();
        dataAux.classeJava = 'br.com.primum.modelo.config_campo_pesquisa.Config_campo_pesquisa';
        dataAux.objetoJson = this.config_campo_pesquisaAux;
        this.dataService.efetuarPesquisa(dataAux).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
    };
    Config_campo_pesquisaComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro a pesquisa de Config_campo_pesquisa. ';
        this.router.navigate(['/home']);
    } this.listaDados = result; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Config_campo_pesquisaComponent.prototype, "listaDados", void 0);
    Config_campo_pesquisaComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'config_campo_pesquisa-selector', templateUrl: 'config_campo_pesquisa.component.html' }), 
        __metadata('design:paramtypes', [pesquisa_service_1.PesquisaService, router_1.Router])
    ], Config_campo_pesquisaComponent);
    return Config_campo_pesquisaComponent;
}());
exports.Config_campo_pesquisaComponent = Config_campo_pesquisaComponent;
//# sourceMappingURL=config_campo_pesquisa.component.js.map