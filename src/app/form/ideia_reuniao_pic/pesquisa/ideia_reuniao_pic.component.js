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
var Ideia_reuniao_pic_1 = require('../../../modelo/Ideia_reuniao_pic');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Ideia_reuniao_picComponent = (function () {
    function Ideia_reuniao_picComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = '';
        this.listaDados = [];
    }
    Ideia_reuniao_picComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ideia_reuniao_picAux = new Ideia_reuniao_pic_1.Ideia_reuniao_pic();
        var dataAux = new ObjetoVirtual_1.ObjetoVirtual();
        dataAux.classeJava = 'br.com.primum.modelo.ideia_reuniao_pic.Ideia_reuniao_pic';
        dataAux.objetoJson = this.ideia_reuniao_picAux;
        this.dataService.efetuarPesquisa(dataAux).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
    };
    Ideia_reuniao_picComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro a pesquisa de Ideia_reuniao_pic. ';
        this.router.navigate(['/home']);
    } this.listaDados = result; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Ideia_reuniao_picComponent.prototype, "listaDados", void 0);
    Ideia_reuniao_picComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'ideia_reuniao_pic-selector', templateUrl: 'ideia_reuniao_pic.component.html' }), 
        __metadata('design:paramtypes', [pesquisa_service_1.PesquisaService, router_1.Router])
    ], Ideia_reuniao_picComponent);
    return Ideia_reuniao_picComponent;
}());
exports.Ideia_reuniao_picComponent = Ideia_reuniao_picComponent;
//# sourceMappingURL=ideia_reuniao_pic.component.js.map