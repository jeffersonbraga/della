"use strict";
var router_1 = require('@angular/router');
var config_sistema_component_1 = require('./config_sistema.component');
var config_sistema_routes = [{ path: 'config_sistema*', pathMatch: 'full', redirectTo: '/config_sistema' }, { path: 'config_sistema', component: config_sistema_component_1.Config_sistemaComponent }];
exports.config_sistema_routing = router_1.RouterModule.forChild(config_sistema_routes);
//# sourceMappingURL=config_sistema.routing.js.map