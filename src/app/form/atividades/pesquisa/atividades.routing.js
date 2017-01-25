"use strict";
var router_1 = require('@angular/router');
var atividades_component_1 = require('./atividades.component');
var atividades_routes = [{ path: 'atividades*', pathMatch: 'full', redirectTo: '/atividades' }, { path: 'atividades', component: atividades_component_1.AtividadesComponent }];
exports.atividades_routing = router_1.RouterModule.forChild(atividades_routes);
//# sourceMappingURL=atividades.routing.js.map