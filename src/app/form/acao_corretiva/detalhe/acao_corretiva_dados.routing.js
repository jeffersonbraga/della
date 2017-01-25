"use strict";
var router_1 = require('@angular/router');
var acao_corretiva_dados_component_1 = require('./acao_corretiva_dados.component');
var acao_corretiva_dadosDetails_component_1 = require('./acao_corretiva_dadosDetails.component');
var acao_corretiva_dadosEdit_component_1 = require('./acao_corretiva_dadosEdit.component');
var acao_corretiva_dados_routes = [{ path: '', component: acao_corretiva_dados_component_1.Acao_corretivaDadosComponent, children: [{ path: 'details', component: acao_corretiva_dadosDetails_component_1.Acao_corretivaDadosDetailsComponent }, { path: 'edit', component: acao_corretiva_dadosEdit_component_1.Acao_corretivaDadosEditComponent }] }];
exports.acao_corretiva_dados_routing = router_1.RouterModule.forChild(acao_corretiva_dados_routes);
//# sourceMappingURL=acao_corretiva_dados.routing.js.map