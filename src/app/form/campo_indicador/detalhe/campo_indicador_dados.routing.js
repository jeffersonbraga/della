"use strict";
var router_1 = require('@angular/router');
var campo_indicador_dados_component_1 = require('./campo_indicador_dados.component');
var campo_indicador_dadosDetails_component_1 = require('./campo_indicador_dadosDetails.component');
var campo_indicador_dadosEdit_component_1 = require('./campo_indicador_dadosEdit.component');
var campo_indicador_dados_routes = [{ path: '', component: campo_indicador_dados_component_1.Campo_indicadorDadosComponent, children: [{ path: 'details', component: campo_indicador_dadosDetails_component_1.Campo_indicadorDadosDetailsComponent }, { path: 'edit', component: campo_indicador_dadosEdit_component_1.Campo_indicadorDadosEditComponent }] }];
exports.campo_indicador_dados_routing = router_1.RouterModule.forChild(campo_indicador_dados_routes);
//# sourceMappingURL=campo_indicador_dados.routing.js.map