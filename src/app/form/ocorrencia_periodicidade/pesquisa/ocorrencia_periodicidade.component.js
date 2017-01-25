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
var Ocorrencia_periodicidade_1 = require('../../../modelo/Ocorrencia_periodicidade');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Ocorrencia_periodicidadeComponent = (function () {
    function Ocorrencia_periodicidadeComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = '';
        this.listaDados = [];
    }
    Ocorrencia_periodicidadeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ocorrencia_periodicidadeAux = new Ocorrencia_periodicidade_1.Ocorrencia_periodicidade();
        var dataAux = new ObjetoVirtual_1.ObjetoVirtual();
        dataAux.classeJava = 'br.com.primum.modelo.ocorrencia_periodicidade.Ocorrencia_periodicidade';
        dataAux.objetoJson = this.ocorrencia_periodicidadeAux;
        this.dataService.efetuarPesquisa(dataAux).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
    };
    Ocorrencia_periodicidadeComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro a pesquisa de Ocorrencia_periodicidade. ';
        this.router.navigate(['/home']);
    } this.listaDados = result; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Ocorrencia_periodicidadeComponent.prototype, "listaDados", void 0);
    Ocorrencia_periodicidadeComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'ocorrencia_periodicidade-selector', templateUrl: 'ocorrencia_periodicidade.component.html' }), 
        __metadata('design:paramtypes', [pesquisa_service_1.PesquisaService, router_1.Router])
    ], Ocorrencia_periodicidadeComponent);
    return Ocorrencia_periodicidadeComponent;
}());
exports.Ocorrencia_periodicidadeComponent = Ocorrencia_periodicidadeComponent;
//# sourceMappingURL=ocorrencia_periodicidade.component.js.map