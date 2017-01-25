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
var Participantes_reuniao_picDadosComponent = (function () {
    function Participantes_reuniao_picDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Participantes_reuniao_picDadosDisplayModeEnum;
    }
    Participantes_reuniao_picDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Participantes_reuniao_picDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Participantes_reuniao_picDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Participantes_reuniao_picDadosDisplayModeEnum.Edit;
            break;
    } };
    Participantes_reuniao_picDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'participantes_reuniao_pic-dados', templateUrl: 'participantes_reuniao_pic_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Participantes_reuniao_picDadosComponent);
    return Participantes_reuniao_picDadosComponent;
}());
exports.Participantes_reuniao_picDadosComponent = Participantes_reuniao_picDadosComponent;
var Participantes_reuniao_picDadosDisplayModeEnum;
(function (Participantes_reuniao_picDadosDisplayModeEnum) {
    Participantes_reuniao_picDadosDisplayModeEnum[Participantes_reuniao_picDadosDisplayModeEnum["Details"] = 0] = "Details";
    Participantes_reuniao_picDadosDisplayModeEnum[Participantes_reuniao_picDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Participantes_reuniao_picDadosDisplayModeEnum[Participantes_reuniao_picDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Participantes_reuniao_picDadosDisplayModeEnum || (Participantes_reuniao_picDadosDisplayModeEnum = {}));
//# sourceMappingURL=participantes_reuniao_pic_dados.component.js.map