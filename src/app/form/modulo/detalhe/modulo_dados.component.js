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
var ModuloDadosComponent = (function () {
    function ModuloDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = ModuloDadosDisplayModeEnum;
    }
    ModuloDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = ModuloDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = ModuloDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = ModuloDadosDisplayModeEnum.Edit;
            break;
    } };
    ModuloDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'modulo-dados', templateUrl: 'modulo_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], ModuloDadosComponent);
    return ModuloDadosComponent;
}());
exports.ModuloDadosComponent = ModuloDadosComponent;
var ModuloDadosDisplayModeEnum;
(function (ModuloDadosDisplayModeEnum) {
    ModuloDadosDisplayModeEnum[ModuloDadosDisplayModeEnum["Details"] = 0] = "Details";
    ModuloDadosDisplayModeEnum[ModuloDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    ModuloDadosDisplayModeEnum[ModuloDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(ModuloDadosDisplayModeEnum || (ModuloDadosDisplayModeEnum = {}));
//# sourceMappingURL=modulo_dados.component.js.map