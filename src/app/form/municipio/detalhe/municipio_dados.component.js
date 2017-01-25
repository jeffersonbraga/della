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
var MunicipioDadosComponent = (function () {
    function MunicipioDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = MunicipioDadosDisplayModeEnum;
    }
    MunicipioDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = MunicipioDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = MunicipioDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = MunicipioDadosDisplayModeEnum.Edit;
            break;
    } };
    MunicipioDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'municipio-dados', templateUrl: 'municipio_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], MunicipioDadosComponent);
    return MunicipioDadosComponent;
}());
exports.MunicipioDadosComponent = MunicipioDadosComponent;
var MunicipioDadosDisplayModeEnum;
(function (MunicipioDadosDisplayModeEnum) {
    MunicipioDadosDisplayModeEnum[MunicipioDadosDisplayModeEnum["Details"] = 0] = "Details";
    MunicipioDadosDisplayModeEnum[MunicipioDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    MunicipioDadosDisplayModeEnum[MunicipioDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(MunicipioDadosDisplayModeEnum || (MunicipioDadosDisplayModeEnum = {}));
//# sourceMappingURL=municipio_dados.component.js.map