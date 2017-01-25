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
var Categoria_ishikawa_1 = require('../../../modelo/Categoria_ishikawa');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Categoria_ishikawaComponent = (function () {
    function Categoria_ishikawaComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = '';
        this.listaDados = [];
    }
    Categoria_ishikawaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoria_ishikawaAux = new Categoria_ishikawa_1.Categoria_ishikawa();
        var dataAux = new ObjetoVirtual_1.ObjetoVirtual();
        dataAux.classeJava = 'br.com.primum.modelo.categoria_ishikawa.Categoria_ishikawa';
        dataAux.objetoJson = this.categoria_ishikawaAux;
        this.dataService.efetuarPesquisa(dataAux).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
    };
    Categoria_ishikawaComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro a pesquisa de Categoria_ishikawa. ';
        this.router.navigate(['/home']);
    } this.listaDados = result; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Categoria_ishikawaComponent.prototype, "listaDados", void 0);
    Categoria_ishikawaComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'categoria_ishikawa-selector', templateUrl: 'categoria_ishikawa.component.html' }), 
        __metadata('design:paramtypes', [pesquisa_service_1.PesquisaService, router_1.Router])
    ], Categoria_ishikawaComponent);
    return Categoria_ishikawaComponent;
}());
exports.Categoria_ishikawaComponent = Categoria_ishikawaComponent;
//# sourceMappingURL=categoria_ishikawa.component.js.map