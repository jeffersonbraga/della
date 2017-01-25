"use strict";
var router_1 = require('@angular/router');
var x_component_1 = require('./x.component');
var x_routes = [
    { path: 'x*', pathMatch: 'full', redirectTo: '/x' },
    { path: 'x', component: x_component_1.XComponent }
];
exports.x_routing = router_1.RouterModule.forChild(x_routes);
//# sourceMappingURL=x.routing.js.map