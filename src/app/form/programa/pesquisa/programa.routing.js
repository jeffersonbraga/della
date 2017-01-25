"use strict";
var router_1 = require('@angular/router');
var programa_component_1 = require('./programa.component');
var programa_routes = [{ path: 'programa*', pathMatch: 'full', redirectTo: '/programa' }, { path: 'programa', component: programa_component_1.ProgramaComponent }];
exports.programa_routing = router_1.RouterModule.forChild(programa_routes);
//# sourceMappingURL=programa.routing.js.map