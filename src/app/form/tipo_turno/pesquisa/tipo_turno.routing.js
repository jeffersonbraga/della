"use strict";
var router_1 = require('@angular/router');
var tipo_turno_component_1 = require('./tipo_turno.component');
var tipo_turno_routes = [{ path: 'tipo_turno*', pathMatch: 'full', redirectTo: '/tipo_turno' }, { path: 'tipo_turno', component: tipo_turno_component_1.Tipo_turnoComponent }];
exports.tipo_turno_routing = router_1.RouterModule.forChild(tipo_turno_routes);
//# sourceMappingURL=tipo_turno.routing.js.map