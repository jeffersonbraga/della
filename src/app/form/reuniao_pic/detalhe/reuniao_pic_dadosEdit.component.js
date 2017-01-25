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
var Reuniao_pic_1 = require('../../../modelo/Reuniao_pic');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Reuniao_picDadosEditComponent = (function () {
    function Reuniao_picDadosEditComponent(router, route, pesquisaService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Reuniao_picDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.reuniao_pic.Reuniao_pic"; var id = +params['id']; _this.reuniao_pic = new Reuniao_pic_1.Reuniao_pic(); _this.reuniao_pic.cd_reuniao_pic = id; o.objetoJson = _this.reuniao_pic; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Reuniao_picDadosEditComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a reuniao_pic. ';
    } this.reuniao_pic = result; };
    Reuniao_picDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Reuniao_picDadosEditComponent.prototype.onSubmit = function () { };
    Reuniao_picDadosEditComponent.prototype.onCancel = function (event) { event.preventDefault(); this.router.navigate(['/']); };
    Reuniao_picDadosEditComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'reuniao_pic-dados-edit', templateUrl: 'reuniao_pic_dadosEdit.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Reuniao_picDadosEditComponent);
    return Reuniao_picDadosEditComponent;
}());
exports.Reuniao_picDadosEditComponent = Reuniao_picDadosEditComponent;
//# sourceMappingURL=reuniao_pic_dadosEdit.component.js.map