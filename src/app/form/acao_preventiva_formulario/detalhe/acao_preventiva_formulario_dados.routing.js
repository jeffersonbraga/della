"use strict";
var router_1 = require('@angular/router');
var acao_preventiva_formulario_dados_component_1 = require('./acao_preventiva_formulario_dados.component');
var acao_preventiva_formulario_dadosDetails_component_1 = require('./acao_preventiva_formulario_dadosDetails.component');
var acao_preventiva_formulario_dadosEdit_component_1 = require('./acao_preventiva_formulario_dadosEdit.component');
var acao_preventiva_formulario_dados_routes = [{ path: '', component: acao_preventiva_formulario_dados_component_1.Acao_preventiva_formularioDadosComponent, children: [{ path: 'details', component: acao_preventiva_formulario_dadosDetails_component_1.Acao_preventiva_formularioDadosDetailsComponent }, { path: 'edit', component: acao_preventiva_formulario_dadosEdit_component_1.Acao_preventiva_formularioDadosEditComponent }] }];
exports.acao_preventiva_formulario_dados_routing = router_1.RouterModule.forChild(acao_preventiva_formulario_dados_routes);
//# sourceMappingURL=acao_preventiva_formulario_dados.routing.js.map