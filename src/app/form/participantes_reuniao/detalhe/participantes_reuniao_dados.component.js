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
var Participantes_reuniaoDadosComponent = (function () {
    function Participantes_reuniaoDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Participantes_reuniaoDadosDisplayModeEnum;
    }
    Participantes_reuniaoDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Participantes_reuniaoDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Participantes_reuniaoDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Participantes_reuniaoDadosDisplayModeEnum.Edit;
            break;
    } };
    Participantes_reuniaoDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'participantes_reuniao-dados', templateUrl: 'participantes_reuniao_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Participantes_reuniaoDadosComponent);
    return Participantes_reuniaoDadosComponent;
}());
exports.Participantes_reuniaoDadosComponent = Participantes_reuniaoDadosComponent;
var Participantes_reuniaoDadosDisplayModeEnum;
(function (Participantes_reuniaoDadosDisplayModeEnum) {
    Participantes_reuniaoDadosDisplayModeEnum[Participantes_reuniaoDadosDisplayModeEnum["Details"] = 0] = "Details";
    Participantes_reuniaoDadosDisplayModeEnum[Participantes_reuniaoDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Participantes_reuniaoDadosDisplayModeEnum[Participantes_reuniaoDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Participantes_reuniaoDadosDisplayModeEnum || (Participantes_reuniaoDadosDisplayModeEnum = {}));
//# sourceMappingURL=participantes_reuniao_dados.component.js.map