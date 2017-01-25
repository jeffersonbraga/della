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
var Evento_campanhaDadosComponent = (function () {
    function Evento_campanhaDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Evento_campanhaDadosDisplayModeEnum;
    }
    Evento_campanhaDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Evento_campanhaDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Evento_campanhaDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Evento_campanhaDadosDisplayModeEnum.Edit;
            break;
    } };
    Evento_campanhaDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'evento_campanha-dados', templateUrl: 'evento_campanha_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Evento_campanhaDadosComponent);
    return Evento_campanhaDadosComponent;
}());
exports.Evento_campanhaDadosComponent = Evento_campanhaDadosComponent;
var Evento_campanhaDadosDisplayModeEnum;
(function (Evento_campanhaDadosDisplayModeEnum) {
    Evento_campanhaDadosDisplayModeEnum[Evento_campanhaDadosDisplayModeEnum["Details"] = 0] = "Details";
    Evento_campanhaDadosDisplayModeEnum[Evento_campanhaDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Evento_campanhaDadosDisplayModeEnum[Evento_campanhaDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Evento_campanhaDadosDisplayModeEnum || (Evento_campanhaDadosDisplayModeEnum = {}));
//# sourceMappingURL=evento_campanha_dados.component.js.map