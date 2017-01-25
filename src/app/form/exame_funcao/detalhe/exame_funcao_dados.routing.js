"use strict";
var router_1 = require('@angular/router');
var exame_funcao_dados_component_1 = require('./exame_funcao_dados.component');
var exame_funcao_dadosDetails_component_1 = require('./exame_funcao_dadosDetails.component');
var exame_funcao_dadosEdit_component_1 = require('./exame_funcao_dadosEdit.component');
var exame_funcao_dados_routes = [{ path: '', component: exame_funcao_dados_component_1.Exame_funcaoDadosComponent, children: [{ path: 'details', component: exame_funcao_dadosDetails_component_1.Exame_funcaoDadosDetailsComponent }, { path: 'edit', component: exame_funcao_dadosEdit_component_1.Exame_funcaoDadosEditComponent }] }];
exports.exame_funcao_dados_routing = router_1.RouterModule.forChild(exame_funcao_dados_routes);
//# sourceMappingURL=exame_funcao_dados.routing.js.map