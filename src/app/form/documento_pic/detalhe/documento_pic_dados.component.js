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
var Documento_picDadosComponent = (function () {
    function Documento_picDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Documento_picDadosDisplayModeEnum;
    }
    Documento_picDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Documento_picDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Documento_picDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Documento_picDadosDisplayModeEnum.Edit;
            break;
    } };
    Documento_picDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'documento_pic-dados', templateUrl: 'documento_pic_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Documento_picDadosComponent);
    return Documento_picDadosComponent;
}());
exports.Documento_picDadosComponent = Documento_picDadosComponent;
var Documento_picDadosDisplayModeEnum;
(function (Documento_picDadosDisplayModeEnum) {
    Documento_picDadosDisplayModeEnum[Documento_picDadosDisplayModeEnum["Details"] = 0] = "Details";
    Documento_picDadosDisplayModeEnum[Documento_picDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Documento_picDadosDisplayModeEnum[Documento_picDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Documento_picDadosDisplayModeEnum || (Documento_picDadosDisplayModeEnum = {}));
//# sourceMappingURL=documento_pic_dados.component.js.map