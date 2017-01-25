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
var Evidencia_resposta_exec_1 = require('../../../modelo/Evidencia_resposta_exec');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Evidencia_resposta_execComponent = (function () {
    function Evidencia_resposta_execComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = '';
        this.listaDados = [];
    }
    Evidencia_resposta_execComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.evidencia_resposta_execAux = new Evidencia_resposta_exec_1.Evidencia_resposta_exec();
        var dataAux = new ObjetoVirtual_1.ObjetoVirtual();
        dataAux.classeJava = 'br.com.primum.modelo.evidencia_resposta_exec.Evidencia_resposta_exec';
        dataAux.objetoJson = this.evidencia_resposta_execAux;
        this.dataService.efetuarPesquisa(dataAux).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
    };
    Evidencia_resposta_execComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro a pesquisa de Evidencia_resposta_exec. ';
        this.router.navigate(['/home']);
    } this.listaDados = result; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Evidencia_resposta_execComponent.prototype, "listaDados", void 0);
    Evidencia_resposta_execComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'evidencia_resposta_exec-selector', templateUrl: 'evidencia_resposta_exec.component.html' }), 
        __metadata('design:paramtypes', [pesquisa_service_1.PesquisaService, router_1.Router])
    ], Evidencia_resposta_execComponent);
    return Evidencia_resposta_execComponent;
}());
exports.Evidencia_resposta_execComponent = Evidencia_resposta_execComponent;
//# sourceMappingURL=evidencia_resposta_exec.component.js.map