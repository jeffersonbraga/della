"use strict";
var router_1 = require('@angular/router');
var atividades_dados_component_1 = require('./atividades_dados.component');
var atividades_dadosDetails_component_1 = require('./atividades_dadosDetails.component');
var atividades_dadosEdit_component_1 = require('./atividades_dadosEdit.component');
var atividades_dados_routes = [{ path: '', component: atividades_dados_component_1.AtividadesDadosComponent, children: [{ path: 'details', component: atividades_dadosDetails_component_1.AtividadesDadosDetailsComponent }, { path: 'edit', component: atividades_dadosEdit_component_1.AtividadesDadosEditComponent }] }];
exports.atividades_dados_routing = router_1.RouterModule.forChild(atividades_dados_routes);
//# sourceMappingURL=atividades_dados.routing.js.map