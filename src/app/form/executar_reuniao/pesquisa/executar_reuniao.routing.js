"use strict";
var router_1 = require('@angular/router');
var executar_reuniao_component_1 = require('./executar_reuniao.component');
var executar_reuniao_routes = [{ path: 'executar_reuniao*', pathMatch: 'full', redirectTo: '/executar_reuniao' }, { path: 'executar_reuniao', component: executar_reuniao_component_1.Executar_reuniaoComponent }];
exports.executar_reuniao_routing = router_1.RouterModule.forChild(executar_reuniao_routes);
//# sourceMappingURL=executar_reuniao.routing.js.map