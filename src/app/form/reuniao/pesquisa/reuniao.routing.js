"use strict";
var router_1 = require('@angular/router');
var reuniao_component_1 = require('./reuniao.component');
var reuniao_routes = [{ path: 'reuniao*', pathMatch: 'full', redirectTo: '/reuniao' }, { path: 'reuniao', component: reuniao_component_1.ReuniaoComponent }];
exports.reuniao_routing = router_1.RouterModule.forChild(reuniao_routes);
//# sourceMappingURL=reuniao.routing.js.map