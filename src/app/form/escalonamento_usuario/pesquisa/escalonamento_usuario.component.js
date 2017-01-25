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
var Escalonamento_usuario_1 = require('../../../modelo/Escalonamento_usuario');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Escalonamento_usuarioComponent = (function () {
    function Escalonamento_usuarioComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = '';
        this.listaDados = [];
    }
    Escalonamento_usuarioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.escalonamento_usuarioAux = new Escalonamento_usuario_1.Escalonamento_usuario();
        var dataAux = new ObjetoVirtual_1.ObjetoVirtual();
        dataAux.classeJava = 'br.com.primum.modelo.escalonamento_usuario.Escalonamento_usuario';
        dataAux.objetoJson = this.escalonamento_usuarioAux;
        this.dataService.efetuarPesquisa(dataAux).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
    };
    Escalonamento_usuarioComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro a pesquisa de Escalonamento_usuario. ';
        this.router.navigate(['/home']);
    } this.listaDados = result; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Escalonamento_usuarioComponent.prototype, "listaDados", void 0);
    Escalonamento_usuarioComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'escalonamento_usuario-selector', templateUrl: 'escalonamento_usuario.component.html' }), 
        __metadata('design:paramtypes', [pesquisa_service_1.PesquisaService, router_1.Router])
    ], Escalonamento_usuarioComponent);
    return Escalonamento_usuarioComponent;
}());
exports.Escalonamento_usuarioComponent = Escalonamento_usuarioComponent;
//# sourceMappingURL=escalonamento_usuario.component.js.map