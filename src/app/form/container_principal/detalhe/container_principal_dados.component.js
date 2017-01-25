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
var Container_principalDadosComponent = (function () {
    function Container_principalDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Container_principalDadosDisplayModeEnum;
    }
    Container_principalDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Container_principalDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Container_principalDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Container_principalDadosDisplayModeEnum.Edit;
            break;
    } };
    Container_principalDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'container_principal-dados', templateUrl: 'container_principal_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Container_principalDadosComponent);
    return Container_principalDadosComponent;
}());
exports.Container_principalDadosComponent = Container_principalDadosComponent;
var Container_principalDadosDisplayModeEnum;
(function (Container_principalDadosDisplayModeEnum) {
    Container_principalDadosDisplayModeEnum[Container_principalDadosDisplayModeEnum["Details"] = 0] = "Details";
    Container_principalDadosDisplayModeEnum[Container_principalDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Container_principalDadosDisplayModeEnum[Container_principalDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Container_principalDadosDisplayModeEnum || (Container_principalDadosDisplayModeEnum = {}));
//# sourceMappingURL=container_principal_dados.component.js.map