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
var Proposta_candidato_1 = require('../../../modelo/Proposta_candidato');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Proposta_candidatoComponent = (function () {
    function Proposta_candidatoComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = '';
        this.listaDados = [];
    }
    Proposta_candidatoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.proposta_candidatoAux = new Proposta_candidato_1.Proposta_candidato();
        var dataAux = new ObjetoVirtual_1.ObjetoVirtual();
        dataAux.classeJava = 'br.com.primum.modelo.proposta_candidato.Proposta_candidato';
        dataAux.objetoJson = this.proposta_candidatoAux;
        this.dataService.efetuarPesquisa(dataAux).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
    };
    Proposta_candidatoComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro a pesquisa de Proposta_candidato. ';
        this.router.navigate(['/home']);
    } this.listaDados = result; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Proposta_candidatoComponent.prototype, "listaDados", void 0);
    Proposta_candidatoComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'proposta_candidato-selector', templateUrl: 'proposta_candidato.component.html' }), 
        __metadata('design:paramtypes', [pesquisa_service_1.PesquisaService, router_1.Router])
    ], Proposta_candidatoComponent);
    return Proposta_candidatoComponent;
}());
exports.Proposta_candidatoComponent = Proposta_candidatoComponent;
//# sourceMappingURL=proposta_candidato.component.js.map