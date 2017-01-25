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
var FluxogramaDadosComponent = (function () {
    function FluxogramaDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = FluxogramaDadosDisplayModeEnum;
    }
    FluxogramaDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = FluxogramaDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = FluxogramaDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = FluxogramaDadosDisplayModeEnum.Edit;
            break;
    } };
    FluxogramaDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'fluxograma-dados', templateUrl: 'fluxograma_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], FluxogramaDadosComponent);
    return FluxogramaDadosComponent;
}());
exports.FluxogramaDadosComponent = FluxogramaDadosComponent;
var FluxogramaDadosDisplayModeEnum;
(function (FluxogramaDadosDisplayModeEnum) {
    FluxogramaDadosDisplayModeEnum[FluxogramaDadosDisplayModeEnum["Details"] = 0] = "Details";
    FluxogramaDadosDisplayModeEnum[FluxogramaDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    FluxogramaDadosDisplayModeEnum[FluxogramaDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(FluxogramaDadosDisplayModeEnum || (FluxogramaDadosDisplayModeEnum = {}));
//# sourceMappingURL=fluxograma_dados.component.js.map