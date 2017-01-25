"use strict";
var router_1 = require('@angular/router');
var manager_app_component_1 = require('./manager_app.component');
var manager_app_routes = [
    { path: 'manager*', pathMatch: 'full', redirectTo: '/manager' },
    { path: 'manager', component: manager_app_component_1.Manager_appComponent }
];
exports.manager_app_routing = router_1.RouterModule.forChild(manager_app_routes);
//# sourceMappingURL=manager_app.routing.js.map