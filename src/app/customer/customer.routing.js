"use strict";
var router_1 = require('@angular/router');
var customer_component_1 = require('./customer.component');
var customerOrders_component_1 = require('./customerOrders.component');
var customerDetails_component_1 = require('./customerDetails.component');
var customerEdit_component_1 = require('./customerEdit.component');
var customer_routes = [
    {
        path: '',
        component: customer_component_1.CustomerComponent,
        children: [
            { path: 'orders', component: customerOrders_component_1.CustomerOrdersComponent },
            { path: 'details', component: customerDetails_component_1.CustomerDetailsComponent },
            { path: 'edit', component: customerEdit_component_1.CustomerEditComponent }
        ]
    }
];
exports.customer_routing = router_1.RouterModule.forChild(customer_routes);
//# sourceMappingURL=customer.routing.js.map