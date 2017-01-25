"use strict";
var router_1 = require('@angular/router');
var evento_campanha_component_1 = require('./evento_campanha.component');
var evento_campanha_routes = [{ path: 'evento_campanha*', pathMatch: 'full', redirectTo: '/evento_campanha' }, { path: 'evento_campanha', component: evento_campanha_component_1.Evento_campanhaComponent }];
exports.evento_campanha_routing = router_1.RouterModule.forChild(evento_campanha_routes);
//# sourceMappingURL=evento_campanha.routing.js.map