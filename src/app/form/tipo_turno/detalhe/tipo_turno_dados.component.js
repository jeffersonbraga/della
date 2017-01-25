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
var Tipo_turnoDadosComponent = (function () {
    function Tipo_turnoDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Tipo_turnoDadosDisplayModeEnum;
    }
    Tipo_turnoDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Tipo_turnoDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Tipo_turnoDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Tipo_turnoDadosDisplayModeEnum.Edit;
            break;
    } };
    Tipo_turnoDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'tipo_turno-dados', templateUrl: 'tipo_turno_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Tipo_turnoDadosComponent);
    return Tipo_turnoDadosComponent;
}());
exports.Tipo_turnoDadosComponent = Tipo_turnoDadosComponent;
var Tipo_turnoDadosDisplayModeEnum;
(function (Tipo_turnoDadosDisplayModeEnum) {
    Tipo_turnoDadosDisplayModeEnum[Tipo_turnoDadosDisplayModeEnum["Details"] = 0] = "Details";
    Tipo_turnoDadosDisplayModeEnum[Tipo_turnoDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Tipo_turnoDadosDisplayModeEnum[Tipo_turnoDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Tipo_turnoDadosDisplayModeEnum || (Tipo_turnoDadosDisplayModeEnum = {}));
//# sourceMappingURL=tipo_turno_dados.component.js.map