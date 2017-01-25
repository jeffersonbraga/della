"use strict";
var router_1 = require('@angular/router');
var modulo_indicadores_dados_component_1 = require('./modulo_indicadores_dados.component');
var modulo_indicadores_dadosDetails_component_1 = require('./modulo_indicadores_dadosDetails.component');
var modulo_indicadores_dadosEdit_component_1 = require('./modulo_indicadores_dadosEdit.component');
var modulo_indicadores_dados_routes = [{ path: '', component: modulo_indicadores_dados_component_1.Modulo_indicadoresDadosComponent, children: [{ path: 'details', component: modulo_indicadores_dadosDetails_component_1.Modulo_indicadoresDadosDetailsComponent }, { path: 'edit', component: modulo_indicadores_dadosEdit_component_1.Modulo_indicadoresDadosEditComponent }] }];
exports.modulo_indicadores_dados_routing = router_1.RouterModule.forChild(modulo_indicadores_dados_routes);
//# sourceMappingURL=modulo_indicadores_dados.routing.js.map