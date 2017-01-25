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
var Participantes_reuniao_1 = require('../../../modelo/Participantes_reuniao');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Participantes_reuniaoComponent = (function () {
    function Participantes_reuniaoComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = '';
        this.listaDados = [];
    }
    Participantes_reuniaoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.participantes_reuniaoAux = new Participantes_reuniao_1.Participantes_reuniao();
        var dataAux = new ObjetoVirtual_1.ObjetoVirtual();
        dataAux.classeJava = 'br.com.primum.modelo.participantes_reuniao.Participantes_reuniao';
        dataAux.objetoJson = this.participantes_reuniaoAux;
        this.dataService.efetuarPesquisa(dataAux).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
    };
    Participantes_reuniaoComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro a pesquisa de Participantes_reuniao. ';
        this.router.navigate(['/home']);
    } this.listaDados = result; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Participantes_reuniaoComponent.prototype, "listaDados", void 0);
    Participantes_reuniaoComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'participantes_reuniao-selector', templateUrl: 'participantes_reuniao.component.html' }), 
        __metadata('design:paramtypes', [pesquisa_service_1.PesquisaService, router_1.Router])
    ], Participantes_reuniaoComponent);
    return Participantes_reuniaoComponent;
}());
exports.Participantes_reuniaoComponent = Participantes_reuniaoComponent;
//# sourceMappingURL=participantes_reuniao.component.js.map