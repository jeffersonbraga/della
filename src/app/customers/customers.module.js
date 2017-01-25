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
var common_1 = require('@angular/common');
var customers_component_1 = require('./customers.component');
var customersCard_component_1 = require('./customersCard.component');
var customersGrid_component_1 = require('./customersGrid.component');
var filterTextbox_component_1 = require('../filterTextbox/filterTextbox.component');
var shared_module_1 = require('../shared/shared.module');
// import { CoreModule }   from '../core/core.module';
var customers_routing_1 = require('./customers.routing');
var CustomersModule = (function () {
    function CustomersModule() {
    }
    CustomersModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, customers_routing_1.customers_routing, shared_module_1.SharedModule],
            declarations: [customers_component_1.CustomersComponent, customersCard_component_1.CustomersCardComponent,
                customersGrid_component_1.CustomersGridComponent, filterTextbox_component_1.FilterTextboxComponent],
            exports: [customers_component_1.CustomersComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], CustomersModule);
    return CustomersModule;
}());
exports.CustomersModule = CustomersModule;
//# sourceMappingURL=customers.module.js.map