"use strict";
var router_1 = require('@angular/router');
var exame_medico_component_1 = require('./exame_medico.component');
var exame_medico_routes = [{ path: 'exame_medico*', pathMatch: 'full', redirectTo: '/exame_medico' }, { path: 'exame_medico', component: exame_medico_component_1.Exame_medicoComponent }];
exports.exame_medico_routing = router_1.RouterModule.forChild(exame_medico_routes);
//# sourceMappingURL=exame_medico.routing.js.map