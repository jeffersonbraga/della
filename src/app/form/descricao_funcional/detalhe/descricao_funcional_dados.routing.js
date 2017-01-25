"use strict";
var router_1 = require('@angular/router');
var descricao_funcional_dados_component_1 = require('./descricao_funcional_dados.component');
var descricao_funcional_dadosDetails_component_1 = require('./descricao_funcional_dadosDetails.component');
var descricao_funcional_dadosEdit_component_1 = require('./descricao_funcional_dadosEdit.component');
var descricao_funcional_dados_routes = [{ path: '', component: descricao_funcional_dados_component_1.Descricao_funcionalDadosComponent, children: [{ path: 'details', component: descricao_funcional_dadosDetails_component_1.Descricao_funcionalDadosDetailsComponent }, { path: 'edit', component: descricao_funcional_dadosEdit_component_1.Descricao_funcionalDadosEditComponent }] }];
exports.descricao_funcional_dados_routing = router_1.RouterModule.forChild(descricao_funcional_dados_routes);
//# sourceMappingURL=descricao_funcional_dados.routing.js.map