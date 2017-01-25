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
var Pre_avaliacao_ideia_pic_1 = require('../../../modelo/Pre_avaliacao_ideia_pic');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Pre_avaliacao_ideia_picComponent = (function () {
    function Pre_avaliacao_ideia_picComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = '';
        this.listaDados = [];
    }
    Pre_avaliacao_ideia_picComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pre_avaliacao_ideia_picAux = new Pre_avaliacao_ideia_pic_1.Pre_avaliacao_ideia_pic();
        var dataAux = new ObjetoVirtual_1.ObjetoVirtual();
        dataAux.classeJava = 'br.com.primum.modelo.pre_avaliacao_ideia_pic.Pre_avaliacao_ideia_pic';
        dataAux.objetoJson = this.pre_avaliacao_ideia_picAux;
        this.dataService.efetuarPesquisa(dataAux).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
    };
    Pre_avaliacao_ideia_picComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro a pesquisa de Pre_avaliacao_ideia_pic. ';
        this.router.navigate(['/home']);
    } this.listaDados = result; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Pre_avaliacao_ideia_picComponent.prototype, "listaDados", void 0);
    Pre_avaliacao_ideia_picComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'pre_avaliacao_ideia_pic-selector', templateUrl: 'pre_avaliacao_ideia_pic.component.html' }), 
        __metadata('design:paramtypes', [pesquisa_service_1.PesquisaService, router_1.Router])
    ], Pre_avaliacao_ideia_picComponent);
    return Pre_avaliacao_ideia_picComponent;
}());
exports.Pre_avaliacao_ideia_picComponent = Pre_avaliacao_ideia_picComponent;
//# sourceMappingURL=pre_avaliacao_ideia_pic.component.js.map