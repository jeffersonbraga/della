"use strict";
var router_1 = require('@angular/router');
var tabela_component_1 = require('./tabela.component');
var tabela_routes = [{ path: 'tabela*', pathMatch: 'full', redirectTo: '/tabela' }, { path: 'tabela', component: tabela_component_1.TabelaComponent }];
exports.tabela_routing = router_1.RouterModule.forChild(tabela_routes);
//# sourceMappingURL=tabela.routing.js.map