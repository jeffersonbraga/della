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
var Sub_formularioDadosComponent = (function () {
    function Sub_formularioDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Sub_formularioDadosDisplayModeEnum;
    }
    Sub_formularioDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Sub_formularioDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Sub_formularioDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Sub_formularioDadosDisplayModeEnum.Edit;
            break;
    } };
    Sub_formularioDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'sub_formulario-dados', templateUrl: 'sub_formulario_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Sub_formularioDadosComponent);
    return Sub_formularioDadosComponent;
}());
exports.Sub_formularioDadosComponent = Sub_formularioDadosComponent;
var Sub_formularioDadosDisplayModeEnum;
(function (Sub_formularioDadosDisplayModeEnum) {
    Sub_formularioDadosDisplayModeEnum[Sub_formularioDadosDisplayModeEnum["Details"] = 0] = "Details";
    Sub_formularioDadosDisplayModeEnum[Sub_formularioDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Sub_formularioDadosDisplayModeEnum[Sub_formularioDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Sub_formularioDadosDisplayModeEnum || (Sub_formularioDadosDisplayModeEnum = {}));
//# sourceMappingURL=sub_formulario_dados.component.js.map