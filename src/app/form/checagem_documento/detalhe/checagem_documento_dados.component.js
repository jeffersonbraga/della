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
var Checagem_documentoDadosComponent = (function () {
    function Checagem_documentoDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Checagem_documentoDadosDisplayModeEnum;
    }
    Checagem_documentoDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Checagem_documentoDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Checagem_documentoDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Checagem_documentoDadosDisplayModeEnum.Edit;
            break;
    } };
    Checagem_documentoDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'checagem_documento-dados', templateUrl: 'checagem_documento_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Checagem_documentoDadosComponent);
    return Checagem_documentoDadosComponent;
}());
exports.Checagem_documentoDadosComponent = Checagem_documentoDadosComponent;
var Checagem_documentoDadosDisplayModeEnum;
(function (Checagem_documentoDadosDisplayModeEnum) {
    Checagem_documentoDadosDisplayModeEnum[Checagem_documentoDadosDisplayModeEnum["Details"] = 0] = "Details";
    Checagem_documentoDadosDisplayModeEnum[Checagem_documentoDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Checagem_documentoDadosDisplayModeEnum[Checagem_documentoDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Checagem_documentoDadosDisplayModeEnum || (Checagem_documentoDadosDisplayModeEnum = {}));
//# sourceMappingURL=checagem_documento_dados.component.js.map