"use strict";
var router_1 = require('@angular/router');
var acao_preventiva_pa_dados_component_1 = require('./acao_preventiva_pa_dados.component');
var acao_preventiva_pa_dadosDetails_component_1 = require('./acao_preventiva_pa_dadosDetails.component');
var acao_preventiva_pa_dadosEdit_component_1 = require('./acao_preventiva_pa_dadosEdit.component');
var acao_preventiva_pa_dados_routes = [{ path: '', component: acao_preventiva_pa_dados_component_1.Acao_preventiva_paDadosComponent, children: [{ path: 'details', component: acao_preventiva_pa_dadosDetails_component_1.Acao_preventiva_paDadosDetailsComponent }, { path: 'edit', component: acao_preventiva_pa_dadosEdit_component_1.Acao_preventiva_paDadosEditComponent }] }];
exports.acao_preventiva_pa_dados_routing = router_1.RouterModule.forChild(acao_preventiva_pa_dados_routes);
//# sourceMappingURL=acao_preventiva_pa_dados.routing.js.map