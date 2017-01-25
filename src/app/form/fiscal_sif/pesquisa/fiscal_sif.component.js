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
var Fiscal_sif_1 = require('../../../modelo/Fiscal_sif');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Fiscal_sifComponent = (function () {
    function Fiscal_sifComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = '';
        this.listaDados = [];
    }
    Fiscal_sifComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fiscal_sifAux = new Fiscal_sif_1.Fiscal_sif();
        var dataAux = new ObjetoVirtual_1.ObjetoVirtual();
        dataAux.classeJava = 'br.com.primum.modelo.fiscal_sif.Fiscal_sif';
        dataAux.objetoJson = this.fiscal_sifAux;
        this.dataService.efetuarPesquisa(dataAux).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
    };
    Fiscal_sifComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro a pesquisa de Fiscal_sif. ';
        this.router.navigate(['/home']);
    } this.listaDados = result; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Fiscal_sifComponent.prototype, "listaDados", void 0);
    Fiscal_sifComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'fiscal_sif-selector', templateUrl: 'fiscal_sif.component.html' }), 
        __metadata('design:paramtypes', [pesquisa_service_1.PesquisaService, router_1.Router])
    ], Fiscal_sifComponent);
    return Fiscal_sifComponent;
}());
exports.Fiscal_sifComponent = Fiscal_sifComponent;
//# sourceMappingURL=fiscal_sif.component.js.map