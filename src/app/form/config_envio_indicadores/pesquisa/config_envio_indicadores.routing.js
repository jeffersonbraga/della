"use strict";
var router_1 = require('@angular/router');
var config_envio_indicadores_component_1 = require('./config_envio_indicadores.component');
var config_envio_indicadores_routes = [{ path: 'config_envio_indicadores*', pathMatch: 'full', redirectTo: '/config_envio_indicadores' }, { path: 'config_envio_indicadores', component: config_envio_indicadores_component_1.Config_envio_indicadoresComponent }];
exports.config_envio_indicadores_routing = router_1.RouterModule.forChild(config_envio_indicadores_routes);
//# sourceMappingURL=config_envio_indicadores.routing.js.map