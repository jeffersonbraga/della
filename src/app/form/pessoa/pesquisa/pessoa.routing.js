"use strict";
var router_1 = require('@angular/router');
var pessoa_component_1 = require('./pessoa.component');
var pessoa_routes = [
    { path: 'pessoa*', pathMatch: 'full', redirectTo: '/pessoa' },
    { path: 'pessoa', component: pessoa_component_1.PessoaComponent }];
exports.pessoa_routing = router_1.RouterModule.forChild(pessoa_routes);
//# sourceMappingURL=pessoa.routing.js.map