"use strict";
var router_1 = require('@angular/router');
var pessoa_juridica_component_1 = require('./pessoa_juridica.component');
var pessoa_juridica_routes = [{ path: 'pessoa_juridica*', pathMatch: 'full', redirectTo: '/pessoa_juridica' }, { path: 'pessoa_juridica', component: pessoa_juridica_component_1.Pessoa_juridicaComponent }];
exports.pessoa_juridica_routing = router_1.RouterModule.forChild(pessoa_juridica_routes);
//# sourceMappingURL=pessoa_juridica.routing.js.map