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
var Diagrama_helpdeskDadosComponent = (function () {
    function Diagrama_helpdeskDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Diagrama_helpdeskDadosDisplayModeEnum;
    }
    Diagrama_helpdeskDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Diagrama_helpdeskDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Diagrama_helpdeskDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Diagrama_helpdeskDadosDisplayModeEnum.Edit;
            break;
    } };
    Diagrama_helpdeskDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'diagrama_helpdesk-dados', templateUrl: 'diagrama_helpdesk_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Diagrama_helpdeskDadosComponent);
    return Diagrama_helpdeskDadosComponent;
}());
exports.Diagrama_helpdeskDadosComponent = Diagrama_helpdeskDadosComponent;
var Diagrama_helpdeskDadosDisplayModeEnum;
(function (Diagrama_helpdeskDadosDisplayModeEnum) {
    Diagrama_helpdeskDadosDisplayModeEnum[Diagrama_helpdeskDadosDisplayModeEnum["Details"] = 0] = "Details";
    Diagrama_helpdeskDadosDisplayModeEnum[Diagrama_helpdeskDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Diagrama_helpdeskDadosDisplayModeEnum[Diagrama_helpdeskDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Diagrama_helpdeskDadosDisplayModeEnum || (Diagrama_helpdeskDadosDisplayModeEnum = {}));
//# sourceMappingURL=diagrama_helpdesk_dados.component.js.map