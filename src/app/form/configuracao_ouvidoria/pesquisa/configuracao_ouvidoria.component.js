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
var Configuracao_ouvidoria_1 = require('../../../modelo/Configuracao_ouvidoria');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Configuracao_ouvidoriaComponent = (function () {
    function Configuracao_ouvidoriaComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = '';
        this.listaDados = [];
    }
    Configuracao_ouvidoriaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.configuracao_ouvidoriaAux = new Configuracao_ouvidoria_1.Configuracao_ouvidoria();
        var dataAux = new ObjetoVirtual_1.ObjetoVirtual();
        dataAux.classeJava = 'br.com.primum.modelo.configuracao_ouvidoria.Configuracao_ouvidoria';
        dataAux.objetoJson = this.configuracao_ouvidoriaAux;
        this.dataService.efetuarPesquisa(dataAux).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
    };
    Configuracao_ouvidoriaComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro a pesquisa de Configuracao_ouvidoria. ';
        this.router.navigate(['/home']);
    } this.listaDados = result; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Configuracao_ouvidoriaComponent.prototype, "listaDados", void 0);
    Configuracao_ouvidoriaComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'configuracao_ouvidoria-selector', templateUrl: 'configuracao_ouvidoria.component.html' }), 
        __metadata('design:paramtypes', [pesquisa_service_1.PesquisaService, router_1.Router])
    ], Configuracao_ouvidoriaComponent);
    return Configuracao_ouvidoriaComponent;
}());
exports.Configuracao_ouvidoriaComponent = Configuracao_ouvidoriaComponent;
//# sourceMappingURL=configuracao_ouvidoria.component.js.map