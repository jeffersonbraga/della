"use strict";
var router_1 = require('@angular/router');
var candidato_component_1 = require('./candidato.component');
var candidato_routes = [{ path: 'candidato*', pathMatch: 'full', redirectTo: '/candidato' }, { path: 'candidato', component: candidato_component_1.CandidatoComponent }];
exports.candidato_routing = router_1.RouterModule.forChild(candidato_routes);
//# sourceMappingURL=candidato.routing.js.map