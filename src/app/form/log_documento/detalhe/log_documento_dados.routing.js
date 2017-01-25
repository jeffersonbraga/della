"use strict";
var router_1 = require('@angular/router');
var log_documento_dados_component_1 = require('./log_documento_dados.component');
var log_documento_dadosDetails_component_1 = require('./log_documento_dadosDetails.component');
var log_documento_dadosEdit_component_1 = require('./log_documento_dadosEdit.component');
var log_documento_dados_routes = [{ path: '', component: log_documento_dados_component_1.Log_documentoDadosComponent, children: [{ path: 'details', component: log_documento_dadosDetails_component_1.Log_documentoDadosDetailsComponent }, { path: 'edit', component: log_documento_dadosEdit_component_1.Log_documentoDadosEditComponent }] }];
exports.log_documento_dados_routing = router_1.RouterModule.forChild(log_documento_dados_routes);
//# sourceMappingURL=log_documento_dados.routing.js.map