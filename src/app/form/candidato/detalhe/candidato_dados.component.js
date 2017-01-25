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
var CandidatoDadosComponent = (function () {
    function CandidatoDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = CandidatoDadosDisplayModeEnum;
    }
    CandidatoDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = CandidatoDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = CandidatoDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = CandidatoDadosDisplayModeEnum.Edit;
            break;
    } };
    CandidatoDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'candidato-dados', templateUrl: 'candidato_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], CandidatoDadosComponent);
    return CandidatoDadosComponent;
}());
exports.CandidatoDadosComponent = CandidatoDadosComponent;
var CandidatoDadosDisplayModeEnum;
(function (CandidatoDadosDisplayModeEnum) {
    CandidatoDadosDisplayModeEnum[CandidatoDadosDisplayModeEnum["Details"] = 0] = "Details";
    CandidatoDadosDisplayModeEnum[CandidatoDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    CandidatoDadosDisplayModeEnum[CandidatoDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(CandidatoDadosDisplayModeEnum || (CandidatoDadosDisplayModeEnum = {}));
//# sourceMappingURL=candidato_dados.component.js.map