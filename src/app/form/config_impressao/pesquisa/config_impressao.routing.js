"use strict";
var router_1 = require('@angular/router');
var config_impressao_component_1 = require('./config_impressao.component');
var config_impressao_routes = [{ path: 'config_impressao*', pathMatch: 'full', redirectTo: '/config_impressao' }, { path: 'config_impressao', component: config_impressao_component_1.Config_impressaoComponent }];
exports.config_impressao_routing = router_1.RouterModule.forChild(config_impressao_routes);
//# sourceMappingURL=config_impressao.routing.js.map