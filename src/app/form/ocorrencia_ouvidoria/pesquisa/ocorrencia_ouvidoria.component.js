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
var Ocorrencia_ouvidoria_1 = require('../../../modelo/Ocorrencia_ouvidoria');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Ocorrencia_ouvidoriaComponent = (function () {
    function Ocorrencia_ouvidoriaComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = '';
        this.listaDados = [];
    }
    Ocorrencia_ouvidoriaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ocorrencia_ouvidoriaAux = new Ocorrencia_ouvidoria_1.Ocorrencia_ouvidoria();
        var dataAux = new ObjetoVirtual_1.ObjetoVirtual();
        dataAux.classeJava = 'br.com.primum.modelo.ocorrencia_ouvidoria.Ocorrencia_ouvidoria';
        dataAux.objetoJson = this.ocorrencia_ouvidoriaAux;
        this.dataService.efetuarPesquisa(dataAux).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
    };
    Ocorrencia_ouvidoriaComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro a pesquisa de Ocorrencia_ouvidoria. ';
        this.router.navigate(['/home']);
    } this.listaDados = result; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Ocorrencia_ouvidoriaComponent.prototype, "listaDados", void 0);
    Ocorrencia_ouvidoriaComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'ocorrencia_ouvidoria-selector', templateUrl: 'ocorrencia_ouvidoria.component.html' }), 
        __metadata('design:paramtypes', [pesquisa_service_1.PesquisaService, router_1.Router])
    ], Ocorrencia_ouvidoriaComponent);
    return Ocorrencia_ouvidoriaComponent;
}());
exports.Ocorrencia_ouvidoriaComponent = Ocorrencia_ouvidoriaComponent;
//# sourceMappingURL=ocorrencia_ouvidoria.component.js.map