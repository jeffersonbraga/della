"use strict";
var router_1 = require('@angular/router');
var acao_preventiva_dados_component_1 = require('./acao_preventiva_dados.component');
var acao_preventiva_dadosDetails_component_1 = require('./acao_preventiva_dadosDetails.component');
var acao_preventiva_dadosEdit_component_1 = require('./acao_preventiva_dadosEdit.component');
var acao_preventiva_dados_routes = [{ path: '', component: acao_preventiva_dados_component_1.Acao_preventivaDadosComponent, children: [{ path: 'details', component: acao_preventiva_dadosDetails_component_1.Acao_preventivaDadosDetailsComponent }, { path: 'edit', component: acao_preventiva_dadosEdit_component_1.Acao_preventivaDadosEditComponent }] }];
exports.acao_preventiva_dados_routing = router_1.RouterModule.forChild(acao_preventiva_dados_routes);
//# sourceMappingURL=acao_preventiva_dados.routing.js.map