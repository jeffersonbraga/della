"use strict";
var router_1 = require('@angular/router');
var programa_qualidade_component_1 = require('./programa_qualidade.component');
var programa_qualidade_routes = [{ path: 'programa_qualidade*', pathMatch: 'full', redirectTo: '/programa_qualidade' }, { path: 'programa_qualidade', component: programa_qualidade_component_1.Programa_qualidadeComponent }];
exports.programa_qualidade_routing = router_1.RouterModule.forChild(programa_qualidade_routes);
//# sourceMappingURL=programa_qualidade.routing.js.map