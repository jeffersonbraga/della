"use strict";
var router_1 = require('@angular/router');
var treinamento_funcao_component_1 = require('./treinamento_funcao.component');
var treinamento_funcao_routes = [{ path: 'treinamento_funcao*', pathMatch: 'full', redirectTo: '/treinamento_funcao' }, { path: 'treinamento_funcao', component: treinamento_funcao_component_1.Treinamento_funcaoComponent }];
exports.treinamento_funcao_routing = router_1.RouterModule.forChild(treinamento_funcao_routes);
//# sourceMappingURL=treinamento_funcao.routing.js.map