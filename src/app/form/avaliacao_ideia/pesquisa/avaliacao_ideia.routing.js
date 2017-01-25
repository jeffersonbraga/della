"use strict";
var router_1 = require('@angular/router');
var avaliacao_ideia_component_1 = require('./avaliacao_ideia.component');
var avaliacao_ideia_routes = [{ path: 'avaliacao_ideia*', pathMatch: 'full', redirectTo: '/avaliacao_ideia' }, { path: 'avaliacao_ideia', component: avaliacao_ideia_component_1.Avaliacao_ideiaComponent }];
exports.avaliacao_ideia_routing = router_1.RouterModule.forChild(avaliacao_ideia_routes);
//# sourceMappingURL=avaliacao_ideia.routing.js.map