"use strict";
var router_1 = require('@angular/router');
var profissao_component_1 = require('./profissao.component');
var profissao_routes = [{ path: 'profissao*', pathMatch: 'full', redirectTo: '/profissao' }, { path: 'profissao', component: profissao_component_1.ProfissaoComponent }];
exports.profissao_routing = router_1.RouterModule.forChild(profissao_routes);
//# sourceMappingURL=profissao.routing.js.map