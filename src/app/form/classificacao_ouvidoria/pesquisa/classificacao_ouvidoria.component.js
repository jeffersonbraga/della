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
var Classificacao_ouvidoria_1 = require('../../../modelo/Classificacao_ouvidoria');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Classificacao_ouvidoriaComponent = (function () {
    function Classificacao_ouvidoriaComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = '';
        this.listaDados = [];
    }
    Classificacao_ouvidoriaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.classificacao_ouvidoriaAux = new Classificacao_ouvidoria_1.Classificacao_ouvidoria();
        var dataAux = new ObjetoVirtual_1.ObjetoVirtual();
        dataAux.classeJava = 'br.com.primum.modelo.classificacao_ouvidoria.Classificacao_ouvidoria';
        dataAux.objetoJson = this.classificacao_ouvidoriaAux;
        this.dataService.efetuarPesquisa(dataAux).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
    };
    Classificacao_ouvidoriaComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro a pesquisa de Classificacao_ouvidoria. ';
        this.router.navigate(['/home']);
    } this.listaDados = result; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Classificacao_ouvidoriaComponent.prototype, "listaDados", void 0);
    Classificacao_ouvidoriaComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'classificacao_ouvidoria-selector', templateUrl: 'classificacao_ouvidoria.component.html' }), 
        __metadata('design:paramtypes', [pesquisa_service_1.PesquisaService, router_1.Router])
    ], Classificacao_ouvidoriaComponent);
    return Classificacao_ouvidoriaComponent;
}());
exports.Classificacao_ouvidoriaComponent = Classificacao_ouvidoriaComponent;
//# sourceMappingURL=classificacao_ouvidoria.component.js.map