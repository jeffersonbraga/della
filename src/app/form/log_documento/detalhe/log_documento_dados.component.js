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
var Log_documentoDadosComponent = (function () {
    function Log_documentoDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Log_documentoDadosDisplayModeEnum;
    }
    Log_documentoDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Log_documentoDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Log_documentoDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Log_documentoDadosDisplayModeEnum.Edit;
            break;
    } };
    Log_documentoDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'log_documento-dados', templateUrl: 'log_documento_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Log_documentoDadosComponent);
    return Log_documentoDadosComponent;
}());
exports.Log_documentoDadosComponent = Log_documentoDadosComponent;
var Log_documentoDadosDisplayModeEnum;
(function (Log_documentoDadosDisplayModeEnum) {
    Log_documentoDadosDisplayModeEnum[Log_documentoDadosDisplayModeEnum["Details"] = 0] = "Details";
    Log_documentoDadosDisplayModeEnum[Log_documentoDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Log_documentoDadosDisplayModeEnum[Log_documentoDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Log_documentoDadosDisplayModeEnum || (Log_documentoDadosDisplayModeEnum = {}));
//# sourceMappingURL=log_documento_dados.component.js.map