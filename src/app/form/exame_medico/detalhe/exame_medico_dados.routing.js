"use strict";
var router_1 = require('@angular/router');
var exame_medico_dados_component_1 = require('./exame_medico_dados.component');
var exame_medico_dadosDetails_component_1 = require('./exame_medico_dadosDetails.component');
var exame_medico_dadosEdit_component_1 = require('./exame_medico_dadosEdit.component');
var exame_medico_dados_routes = [{ path: '', component: exame_medico_dados_component_1.Exame_medicoDadosComponent, children: [{ path: 'details', component: exame_medico_dadosDetails_component_1.Exame_medicoDadosDetailsComponent }, { path: 'edit', component: exame_medico_dadosEdit_component_1.Exame_medicoDadosEditComponent }] }];
exports.exame_medico_dados_routing = router_1.RouterModule.forChild(exame_medico_dados_routes);
//# sourceMappingURL=exame_medico_dados.routing.js.map