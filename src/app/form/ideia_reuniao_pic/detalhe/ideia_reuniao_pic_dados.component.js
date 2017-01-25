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
var Ideia_reuniao_picDadosComponent = (function () {
    function Ideia_reuniao_picDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Ideia_reuniao_picDadosDisplayModeEnum;
    }
    Ideia_reuniao_picDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Ideia_reuniao_picDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Ideia_reuniao_picDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Ideia_reuniao_picDadosDisplayModeEnum.Edit;
            break;
    } };
    Ideia_reuniao_picDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'ideia_reuniao_pic-dados', templateUrl: 'ideia_reuniao_pic_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Ideia_reuniao_picDadosComponent);
    return Ideia_reuniao_picDadosComponent;
}());
exports.Ideia_reuniao_picDadosComponent = Ideia_reuniao_picDadosComponent;
var Ideia_reuniao_picDadosDisplayModeEnum;
(function (Ideia_reuniao_picDadosDisplayModeEnum) {
    Ideia_reuniao_picDadosDisplayModeEnum[Ideia_reuniao_picDadosDisplayModeEnum["Details"] = 0] = "Details";
    Ideia_reuniao_picDadosDisplayModeEnum[Ideia_reuniao_picDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Ideia_reuniao_picDadosDisplayModeEnum[Ideia_reuniao_picDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Ideia_reuniao_picDadosDisplayModeEnum || (Ideia_reuniao_picDadosDisplayModeEnum = {}));
//# sourceMappingURL=ideia_reuniao_pic_dados.component.js.map