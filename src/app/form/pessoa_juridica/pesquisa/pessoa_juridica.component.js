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
var Pessoa_juridica_1 = require('../../../modelo/Pessoa_juridica');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Pessoa_juridicaComponent = (function () {
    function Pessoa_juridicaComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = '';
        this.listaDados = [];
    }
    Pessoa_juridicaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pessoa_juridicaAux = new Pessoa_juridica_1.Pessoa_juridica();
        var dataAux = new ObjetoVirtual_1.ObjetoVirtual();
        dataAux.classeJava = 'br.com.primum.modelo.pessoa_juridica.Pessoa_juridica';
        dataAux.objetoJson = this.pessoa_juridicaAux;
        this.dataService.efetuarPesquisa(dataAux).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
    };
    Pessoa_juridicaComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro a pesquisa de Pessoa_juridica. ';
        this.router.navigate(['/home']);
    } this.listaDados = result; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Pessoa_juridicaComponent.prototype, "listaDados", void 0);
    Pessoa_juridicaComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'pessoa_juridica-selector', templateUrl: 'pessoa_juridica.component.html' }), 
        __metadata('design:paramtypes', [pesquisa_service_1.PesquisaService, router_1.Router])
    ], Pessoa_juridicaComponent);
    return Pessoa_juridicaComponent;
}());
exports.Pessoa_juridicaComponent = Pessoa_juridicaComponent;
//# sourceMappingURL=pessoa_juridica.component.js.map