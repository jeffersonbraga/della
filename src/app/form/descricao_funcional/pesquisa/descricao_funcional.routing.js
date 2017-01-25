"use strict";
var router_1 = require('@angular/router');
var descricao_funcional_component_1 = require('./descricao_funcional.component');
var descricao_funcional_routes = [{ path: 'descricao_funcional*', pathMatch: 'full', redirectTo: '/descricao_funcional' }, { path: 'descricao_funcional', component: descricao_funcional_component_1.Descricao_funcionalComponent }];
exports.descricao_funcional_routing = router_1.RouterModule.forChild(descricao_funcional_routes);
//# sourceMappingURL=descricao_funcional.routing.js.map