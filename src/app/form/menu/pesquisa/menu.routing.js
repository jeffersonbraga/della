"use strict";
var router_1 = require('@angular/router');
var menu_component_1 = require('./menu.component');
var menu_routes = [{ path: 'menu*', pathMatch: 'full', redirectTo: '/menu' }, { path: 'menu', component: menu_component_1.MenuComponent }];
exports.menu_routing = router_1.RouterModule.forChild(menu_routes);
//# sourceMappingURL=menu.routing.js.map