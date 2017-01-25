"use strict";
var router_1 = require('@angular/router');
var condicao_component_1 = require('./condicao.component');
var condicao_routes = [{ path: 'condicao*', pathMatch: 'full', redirectTo: '/condicao' }, { path: 'condicao', component: condicao_component_1.CondicaoComponent }];
exports.condicao_routing = router_1.RouterModule.forChild(condicao_routes);
//# sourceMappingURL=condicao.routing.js.map