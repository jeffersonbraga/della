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
var DocumentoDadosComponent = (function () {
    function DocumentoDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = DocumentoDadosDisplayModeEnum;
    }
    DocumentoDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = DocumentoDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = DocumentoDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = DocumentoDadosDisplayModeEnum.Edit;
            break;
    } };
    DocumentoDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'documento-dados', templateUrl: 'documento_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], DocumentoDadosComponent);
    return DocumentoDadosComponent;
}());
exports.DocumentoDadosComponent = DocumentoDadosComponent;
var DocumentoDadosDisplayModeEnum;
(function (DocumentoDadosDisplayModeEnum) {
    DocumentoDadosDisplayModeEnum[DocumentoDadosDisplayModeEnum["Details"] = 0] = "Details";
    DocumentoDadosDisplayModeEnum[DocumentoDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    DocumentoDadosDisplayModeEnum[DocumentoDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(DocumentoDadosDisplayModeEnum || (DocumentoDadosDisplayModeEnum = {}));
//# sourceMappingURL=documento_dados.component.js.map