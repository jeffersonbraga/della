"use strict";
var router_1 = require('@angular/router');
var container_principal_component_1 = require('./container_principal.component');
var container_principal_routes = [{ path: 'container_principal*', pathMatch: 'full', redirectTo: '/container_principal' }, { path: 'container_principal', component: container_principal_component_1.Container_principalComponent }];
exports.container_principal_routing = router_1.RouterModule.forChild(container_principal_routes);
//# sourceMappingURL=container_principal.routing.js.map