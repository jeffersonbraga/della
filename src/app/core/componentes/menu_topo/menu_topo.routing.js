"use strict";
var router_1 = require('@angular/router');
var menu_topo_component_1 = require('./menu_topo.component');
var menu_topo_routes = [
    { path: 'x*', pathMatch: 'full', redirectTo: '/x' },
    { path: 'x', component: menu_topo_component_1.Menu_topoComponent }
];
exports.menu_topo_routing = router_1.RouterModule.forChild(menu_topo_routes);
//# sourceMappingURL=menu_topo.routing.js.map