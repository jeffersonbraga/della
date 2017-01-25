"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./login.component');
var login_routes = [
    { path: '', pathMatch: 'full', redirectTo: '/login' },
    { path: 'login', component: login_component_1.LoginComponent }
];
exports.login_routing = router_1.RouterModule.forChild(login_routes);
//# sourceMappingURL=login.routing.js.map