"use strict";
var router_1 = require('@angular/router');
var customers_component_1 = require('./customers.component');
var customers_routes = [
    { path: 'customers*', pathMatch: 'full', redirectTo: '/customers' },
    { path: 'customers', component: customers_component_1.CustomersComponent }
];
exports.customers_routing = router_1.RouterModule.forChild(customers_routes);
//# sourceMappingURL=customers.routing.js.map