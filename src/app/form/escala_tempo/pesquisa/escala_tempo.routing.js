"use strict";
var router_1 = require('@angular/router');
var escala_tempo_component_1 = require('./escala_tempo.component');
var escala_tempo_routes = [{ path: 'escala_tempo*', pathMatch: 'full', redirectTo: '/escala_tempo' }, { path: 'escala_tempo', component: escala_tempo_component_1.Escala_tempoComponent }];
exports.escala_tempo_routing = router_1.RouterModule.forChild(escala_tempo_routes);
//# sourceMappingURL=escala_tempo.routing.js.map