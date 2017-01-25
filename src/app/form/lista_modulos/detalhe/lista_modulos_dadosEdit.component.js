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
var Lista_modulos_1 = require('../../../modelo/Lista_modulos');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Lista_modulosDadosEditComponent = (function () {
    function Lista_modulosDadosEditComponent(router, route, pesquisaService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Lista_modulosDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.lista_modulos.Lista_modulos"; var id = +params['id']; _this.lista_modulos = new Lista_modulos_1.Lista_modulos(); _this.lista_modulos.cd_lista_modulos = id; o.objetoJson = _this.lista_modulos; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Lista_modulosDadosEditComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a lista_modulos. ';
    } this.lista_modulos = result; };
    Lista_modulosDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Lista_modulosDadosEditComponent.prototype.onSubmit = function () { };
    Lista_modulosDadosEditComponent.prototype.onCancel = function (event) { event.preventDefault(); this.router.navigate(['/']); };
    Lista_modulosDadosEditComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'lista_modulos-dados-edit', templateUrl: 'lista_modulos_dadosEdit.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Lista_modulosDadosEditComponent);
    return Lista_modulosDadosEditComponent;
}());
exports.Lista_modulosDadosEditComponent = Lista_modulosDadosEditComponent;
//# sourceMappingURL=lista_modulos_dadosEdit.component.js.map