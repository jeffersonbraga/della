"use strict";
var router_1 = require('@angular/router');
var menu_indicadores_component_1 = require('./menu_indicadores.component');
var menu_indicadores_routes = [{ path: 'menu_indicadores*', pathMatch: 'full', redirectTo: '/menu_indicadores' }, { path: 'menu_indicadores', component: menu_indicadores_component_1.Menu_indicadoresComponent }];
exports.menu_indicadores_routing = router_1.RouterModule.forChild(menu_indicadores_routes);
//# sourceMappingURL=menu_indicadores.routing.js.map