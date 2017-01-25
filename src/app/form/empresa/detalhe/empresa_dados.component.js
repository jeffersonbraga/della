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
var EmpresaDadosComponent = (function () {
    function EmpresaDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = EmpresaDadosDisplayModeEnum;
    }
    EmpresaDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = EmpresaDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = EmpresaDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = EmpresaDadosDisplayModeEnum.Edit;
            break;
    } };
    EmpresaDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'empresa-dados', templateUrl: 'empresa_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], EmpresaDadosComponent);
    return EmpresaDadosComponent;
}());
exports.EmpresaDadosComponent = EmpresaDadosComponent;
var EmpresaDadosDisplayModeEnum;
(function (EmpresaDadosDisplayModeEnum) {
    EmpresaDadosDisplayModeEnum[EmpresaDadosDisplayModeEnum["Details"] = 0] = "Details";
    EmpresaDadosDisplayModeEnum[EmpresaDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    EmpresaDadosDisplayModeEnum[EmpresaDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(EmpresaDadosDisplayModeEnum || (EmpresaDadosDisplayModeEnum = {}));
//# sourceMappingURL=empresa_dados.component.js.map