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
var Permissao_acesso_documento_1 = require('../../../modelo/Permissao_acesso_documento');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Permissao_acesso_documentoComponent = (function () {
    function Permissao_acesso_documentoComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = '';
        this.listaDados = [];
    }
    Permissao_acesso_documentoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.permissao_acesso_documentoAux = new Permissao_acesso_documento_1.Permissao_acesso_documento();
        var dataAux = new ObjetoVirtual_1.ObjetoVirtual();
        dataAux.classeJava = 'br.com.primum.modelo.permissao_acesso_documento.Permissao_acesso_documento';
        dataAux.objetoJson = this.permissao_acesso_documentoAux;
        this.dataService.efetuarPesquisa(dataAux).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
    };
    Permissao_acesso_documentoComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro a pesquisa de Permissao_acesso_documento. ';
        this.router.navigate(['/home']);
    } this.listaDados = result; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Permissao_acesso_documentoComponent.prototype, "listaDados", void 0);
    Permissao_acesso_documentoComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'permissao_acesso_documento-selector', templateUrl: 'permissao_acesso_documento.component.html' }), 
        __metadata('design:paramtypes', [pesquisa_service_1.PesquisaService, router_1.Router])
    ], Permissao_acesso_documentoComponent);
    return Permissao_acesso_documentoComponent;
}());
exports.Permissao_acesso_documentoComponent = Permissao_acesso_documentoComponent;
//# sourceMappingURL=permissao_acesso_documento.component.js.map