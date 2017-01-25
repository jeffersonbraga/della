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
var Servico_1 = require('../../../modelo/Servico');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var ServicoComponent = (function () {
    function ServicoComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = '';
        this.listaDadosServ = [];
    }
    ServicoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.servico = new Servico_1.Servico();
        var dataAux = new ObjetoVirtual_1.ObjetoVirtual();
        dataAux.classeJava = 'br.com.primum.modelo.servico.Servico';
        dataAux.objetoJson = this.servico;
        this.dataService.efetuarPesquisa(dataAux)
            .subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
    };
    ServicoComponent.prototype.onEfetuarPesquisa = function (result) {
        if (!result) {
            this.errorMessage = 'Houve um erro a pesquisa de Compra. ';
            this.router.navigate(['/home']);
        }
        this.listaDadosServ = result;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ServicoComponent.prototype, "listaDadosServ", void 0);
    ServicoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'servico-selector',
            templateUrl: 'servico.component.html'
        }), 
        __metadata('design:paramtypes', [pesquisa_service_1.PesquisaService, router_1.Router])
    ], ServicoComponent);
    return ServicoComponent;
}());
exports.ServicoComponent = ServicoComponent;
//# sourceMappingURL=servico.component.js.map