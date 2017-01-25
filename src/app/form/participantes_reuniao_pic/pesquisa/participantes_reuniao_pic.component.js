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
var Participantes_reuniao_pic_1 = require('../../../modelo/Participantes_reuniao_pic');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Participantes_reuniao_picComponent = (function () {
    function Participantes_reuniao_picComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = '';
        this.listaDados = [];
    }
    Participantes_reuniao_picComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.participantes_reuniao_picAux = new Participantes_reuniao_pic_1.Participantes_reuniao_pic();
        var dataAux = new ObjetoVirtual_1.ObjetoVirtual();
        dataAux.classeJava = 'br.com.primum.modelo.participantes_reuniao_pic.Participantes_reuniao_pic';
        dataAux.objetoJson = this.participantes_reuniao_picAux;
        this.dataService.efetuarPesquisa(dataAux).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
    };
    Participantes_reuniao_picComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro a pesquisa de Participantes_reuniao_pic. ';
        this.router.navigate(['/home']);
    } this.listaDados = result; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Participantes_reuniao_picComponent.prototype, "listaDados", void 0);
    Participantes_reuniao_picComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'participantes_reuniao_pic-selector', templateUrl: 'participantes_reuniao_pic.component.html' }), 
        __metadata('design:paramtypes', [pesquisa_service_1.PesquisaService, router_1.Router])
    ], Participantes_reuniao_picComponent);
    return Participantes_reuniao_picComponent;
}());
exports.Participantes_reuniao_picComponent = Participantes_reuniao_picComponent;
//# sourceMappingURL=participantes_reuniao_pic.component.js.map