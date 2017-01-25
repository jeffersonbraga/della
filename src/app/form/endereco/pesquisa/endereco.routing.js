"use strict";
var router_1 = require('@angular/router');
var endereco_component_1 = require('./endereco.component');
var endereco_routes = [{ path: 'endereco*', pathMatch: 'full', redirectTo: '/endereco' }, { path: 'endereco', component: endereco_component_1.EnderecoComponent }];
exports.endereco_routing = router_1.RouterModule.forChild(endereco_routes);
//# sourceMappingURL=endereco.routing.js.map