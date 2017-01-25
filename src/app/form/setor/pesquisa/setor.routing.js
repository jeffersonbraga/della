"use strict";
var router_1 = require('@angular/router');
var setor_component_1 = require('./setor.component');
var setor_routes = [{ path: 'setor*', pathMatch: 'full', redirectTo: '/setor' }, { path: 'setor', component: setor_component_1.SetorComponent }];
exports.setor_routing = router_1.RouterModule.forChild(setor_routes);
//# sourceMappingURL=setor.routing.js.map