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
var Programa_qualidadeDadosComponent = (function () {
    function Programa_qualidadeDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Programa_qualidadeDadosDisplayModeEnum;
    }
    Programa_qualidadeDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Programa_qualidadeDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Programa_qualidadeDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Programa_qualidadeDadosDisplayModeEnum.Edit;
            break;
    } };
    Programa_qualidadeDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'programa_qualidade-dados', templateUrl: 'programa_qualidade_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Programa_qualidadeDadosComponent);
    return Programa_qualidadeDadosComponent;
}());
exports.Programa_qualidadeDadosComponent = Programa_qualidadeDadosComponent;
var Programa_qualidadeDadosDisplayModeEnum;
(function (Programa_qualidadeDadosDisplayModeEnum) {
    Programa_qualidadeDadosDisplayModeEnum[Programa_qualidadeDadosDisplayModeEnum["Details"] = 0] = "Details";
    Programa_qualidadeDadosDisplayModeEnum[Programa_qualidadeDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Programa_qualidadeDadosDisplayModeEnum[Programa_qualidadeDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Programa_qualidadeDadosDisplayModeEnum || (Programa_qualidadeDadosDisplayModeEnum = {}));
//# sourceMappingURL=programa_qualidade_dados.component.js.map