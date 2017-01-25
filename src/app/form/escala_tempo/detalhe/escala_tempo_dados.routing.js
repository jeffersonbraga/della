"use strict";
var router_1 = require('@angular/router');
var escala_tempo_dados_component_1 = require('./escala_tempo_dados.component');
var escala_tempo_dadosDetails_component_1 = require('./escala_tempo_dadosDetails.component');
var escala_tempo_dadosEdit_component_1 = require('./escala_tempo_dadosEdit.component');
var escala_tempo_dados_routes = [{ path: '', component: escala_tempo_dados_component_1.Escala_tempoDadosComponent, children: [{ path: 'details', component: escala_tempo_dadosDetails_component_1.Escala_tempoDadosDetailsComponent }, { path: 'edit', component: escala_tempo_dadosEdit_component_1.Escala_tempoDadosEditComponent }] }];
exports.escala_tempo_dados_routing = router_1.RouterModule.forChild(escala_tempo_dados_routes);
//# sourceMappingURL=escala_tempo_dados.routing.js.map