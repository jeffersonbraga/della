"use strict";
var router_1 = require('@angular/router');
var exame_funcao_component_1 = require('./exame_funcao.component');
var exame_funcao_routes = [{ path: 'exame_funcao*', pathMatch: 'full', redirectTo: '/exame_funcao' }, { path: 'exame_funcao', component: exame_funcao_component_1.Exame_funcaoComponent }];
exports.exame_funcao_routing = router_1.RouterModule.forChild(exame_funcao_routes);
//# sourceMappingURL=exame_funcao.routing.js.map