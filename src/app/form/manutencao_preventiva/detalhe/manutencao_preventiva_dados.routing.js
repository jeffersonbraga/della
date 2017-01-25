"use strict";
var router_1 = require('@angular/router');
var manutencao_preventiva_dados_component_1 = require('./manutencao_preventiva_dados.component');
var manutencao_preventiva_dadosDetails_component_1 = require('./manutencao_preventiva_dadosDetails.component');
var manutencao_preventiva_dadosEdit_component_1 = require('./manutencao_preventiva_dadosEdit.component');
var manutencao_preventiva_dados_routes = [{ path: '', component: manutencao_preventiva_dados_component_1.Manutencao_preventivaDadosComponent, children: [{ path: 'details', component: manutencao_preventiva_dadosDetails_component_1.Manutencao_preventivaDadosDetailsComponent }, { path: 'edit', component: manutencao_preventiva_dadosEdit_component_1.Manutencao_preventivaDadosEditComponent }] }];
exports.manutencao_preventiva_dados_routing = router_1.RouterModule.forChild(manutencao_preventiva_dados_routes);
//# sourceMappingURL=manutencao_preventiva_dados.routing.js.map