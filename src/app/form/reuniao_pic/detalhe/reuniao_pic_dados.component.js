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
var Reuniao_picDadosComponent = (function () {
    function Reuniao_picDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Reuniao_picDadosDisplayModeEnum;
    }
    Reuniao_picDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Reuniao_picDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Reuniao_picDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Reuniao_picDadosDisplayModeEnum.Edit;
            break;
    } };
    Reuniao_picDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'reuniao_pic-dados', templateUrl: 'reuniao_pic_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Reuniao_picDadosComponent);
    return Reuniao_picDadosComponent;
}());
exports.Reuniao_picDadosComponent = Reuniao_picDadosComponent;
var Reuniao_picDadosDisplayModeEnum;
(function (Reuniao_picDadosDisplayModeEnum) {
    Reuniao_picDadosDisplayModeEnum[Reuniao_picDadosDisplayModeEnum["Details"] = 0] = "Details";
    Reuniao_picDadosDisplayModeEnum[Reuniao_picDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Reuniao_picDadosDisplayModeEnum[Reuniao_picDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Reuniao_picDadosDisplayModeEnum || (Reuniao_picDadosDisplayModeEnum = {}));
//# sourceMappingURL=reuniao_pic_dados.component.js.map