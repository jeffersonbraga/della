"use strict";
var router_1 = require('@angular/router');
var config_indicadores_component_1 = require('./config_indicadores.component');
var config_indicadores_routes = [{ path: 'config_indicadores*', pathMatch: 'full', redirectTo: '/config_indicadores' }, { path: 'config_indicadores', component: config_indicadores_component_1.Config_indicadoresComponent }];
exports.config_indicadores_routing = router_1.RouterModule.forChild(config_indicadores_routes);
//# sourceMappingURL=config_indicadores.routing.js.map