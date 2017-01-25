"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home.component');
var home_routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: home_component_1.HomeComponent }
];
exports.home_routing = router_1.RouterModule.forChild(home_routes);
//# sourceMappingURL=home.routing.js.map