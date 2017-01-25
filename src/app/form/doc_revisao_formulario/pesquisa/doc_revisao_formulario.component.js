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
var Doc_revisao_formulario_1 = require('../../../modelo/Doc_revisao_formulario');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Doc_revisao_formularioComponent = (function () {
    function Doc_revisao_formularioComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = '';
        this.listaDados = [];
    }
    Doc_revisao_formularioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.doc_revisao_formularioAux = new Doc_revisao_formulario_1.Doc_revisao_formulario();
        var dataAux = new ObjetoVirtual_1.ObjetoVirtual();
        dataAux.classeJava = 'br.com.primum.modelo.doc_revisao_formulario.Doc_revisao_formulario';
        dataAux.objetoJson = this.doc_revisao_formularioAux;
        this.dataService.efetuarPesquisa(dataAux).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
    };
    Doc_revisao_formularioComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro a pesquisa de Doc_revisao_formulario. ';
        this.router.navigate(['/home']);
    } this.listaDados = result; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Doc_revisao_formularioComponent.prototype, "listaDados", void 0);
    Doc_revisao_formularioComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'doc_revisao_formulario-selector', templateUrl: 'doc_revisao_formulario.component.html' }), 
        __metadata('design:paramtypes', [pesquisa_service_1.PesquisaService, router_1.Router])
    ], Doc_revisao_formularioComponent);
    return Doc_revisao_formularioComponent;
}());
exports.Doc_revisao_formularioComponent = Doc_revisao_formularioComponent;
//# sourceMappingURL=doc_revisao_formulario.component.js.map