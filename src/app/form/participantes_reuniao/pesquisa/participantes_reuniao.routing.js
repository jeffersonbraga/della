"use strict";
var router_1 = require('@angular/router');
var participantes_reuniao_component_1 = require('./participantes_reuniao.component');
var participantes_reuniao_routes = [{ path: 'participantes_reuniao*', pathMatch: 'full', redirectTo: '/participantes_reuniao' }, { path: 'participantes_reuniao', component: participantes_reuniao_component_1.Participantes_reuniaoComponent }];
exports.participantes_reuniao_routing = router_1.RouterModule.forChild(participantes_reuniao_routes);
//# sourceMappingURL=participantes_reuniao.routing.js.map