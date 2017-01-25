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
var Formulario_indicadorDadosComponent = (function () {
    function Formulario_indicadorDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Formulario_indicadorDadosDisplayModeEnum;
    }
    Formulario_indicadorDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Formulario_indicadorDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Formulario_indicadorDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Formulario_indicadorDadosDisplayModeEnum.Edit;
            break;
    } };
    Formulario_indicadorDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'formulario_indicador-dados', templateUrl: 'formulario_indicador_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Formulario_indicadorDadosComponent);
    return Formulario_indicadorDadosComponent;
}());
exports.Formulario_indicadorDadosComponent = Formulario_indicadorDadosComponent;
var Formulario_indicadorDadosDisplayModeEnum;
(function (Formulario_indicadorDadosDisplayModeEnum) {
    Formulario_indicadorDadosDisplayModeEnum[Formulario_indicadorDadosDisplayModeEnum["Details"] = 0] = "Details";
    Formulario_indicadorDadosDisplayModeEnum[Formulario_indicadorDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Formulario_indicadorDadosDisplayModeEnum[Formulario_indicadorDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Formulario_indicadorDadosDisplayModeEnum || (Formulario_indicadorDadosDisplayModeEnum = {}));
//# sourceMappingURL=formulario_indicador_dados.component.js.map