"use strict";
var router_1 = require('@angular/router');
var tabela_dados_component_1 = require('./tabela_dados.component');
var tabela_dadosDetails_component_1 = require('./tabela_dadosDetails.component');
var tabela_dadosEdit_component_1 = require('./tabela_dadosEdit.component');
var tabela_dados_routes = [{ path: '', component: tabela_dados_component_1.TabelaDadosComponent, children: [{ path: 'details', component: tabela_dadosDetails_component_1.TabelaDadosDetailsComponent }, { path: 'edit', component: tabela_dadosEdit_component_1.TabelaDadosEditComponent }] }];
exports.tabela_dados_routing = router_1.RouterModule.forChild(tabela_dados_routes);
//# sourceMappingURL=tabela_dados.routing.js.map