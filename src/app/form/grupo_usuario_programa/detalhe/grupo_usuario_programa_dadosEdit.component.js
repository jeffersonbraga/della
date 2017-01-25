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
var Grupo_usuario_programa_1 = require('../../../modelo/Grupo_usuario_programa');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Grupo_usuario_programaDadosEditComponent = (function () {
    function Grupo_usuario_programaDadosEditComponent(router, route, pesquisaService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Grupo_usuario_programaDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.grupo_usuario_programa.Grupo_usuario_programa"; var id = +params['id']; _this.grupo_usuario_programa = new Grupo_usuario_programa_1.Grupo_usuario_programa(); _this.grupo_usuario_programa.cd_grupo_usuario_programa = id; o.objetoJson = _this.grupo_usuario_programa; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Grupo_usuario_programaDadosEditComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a grupo_usuario_programa. ';
    } this.grupo_usuario_programa = result; };
    Grupo_usuario_programaDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Grupo_usuario_programaDadosEditComponent.prototype.onSubmit = function () { };
    Grupo_usuario_programaDadosEditComponent.prototype.onCancel = function (event) { event.preventDefault(); this.router.navigate(['/']); };
    Grupo_usuario_programaDadosEditComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'grupo_usuario_programa-dados-edit', templateUrl: 'grupo_usuario_programa_dadosEdit.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Grupo_usuario_programaDadosEditComponent);
    return Grupo_usuario_programaDadosEditComponent;
}());
exports.Grupo_usuario_programaDadosEditComponent = Grupo_usuario_programaDadosEditComponent;
//# sourceMappingURL=grupo_usuario_programa_dadosEdit.component.js.map