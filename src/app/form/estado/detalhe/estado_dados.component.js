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
var EstadoDadosComponent = (function () {
    function EstadoDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = EstadoDadosDisplayModeEnum;
    }
    EstadoDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = EstadoDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = EstadoDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = EstadoDadosDisplayModeEnum.Edit;
            break;
    } };
    EstadoDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'estado-dados', templateUrl: 'estado_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], EstadoDadosComponent);
    return EstadoDadosComponent;
}());
exports.EstadoDadosComponent = EstadoDadosComponent;
var EstadoDadosDisplayModeEnum;
(function (EstadoDadosDisplayModeEnum) {
    EstadoDadosDisplayModeEnum[EstadoDadosDisplayModeEnum["Details"] = 0] = "Details";
    EstadoDadosDisplayModeEnum[EstadoDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    EstadoDadosDisplayModeEnum[EstadoDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(EstadoDadosDisplayModeEnum || (EstadoDadosDisplayModeEnum = {}));
//# sourceMappingURL=estado_dados.component.js.map