"use strict";
var router_1 = require('@angular/router');
var unidade_component_1 = require('./unidade.component');
var unidade_routes = [{ path: 'unidade*', pathMatch: 'full', redirectTo: '/unidade' }, { path: 'unidade', component: unidade_component_1.UnidadeComponent }];
exports.unidade_routing = router_1.RouterModule.forChild(unidade_routes);
//# sourceMappingURL=unidade.routing.js.map