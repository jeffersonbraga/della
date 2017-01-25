"use strict";
var router_1 = require('@angular/router');
var categoria_ishikawa_dados_component_1 = require('./categoria_ishikawa_dados.component');
var categoria_ishikawa_dadosDetails_component_1 = require('./categoria_ishikawa_dadosDetails.component');
var categoria_ishikawa_dadosEdit_component_1 = require('./categoria_ishikawa_dadosEdit.component');
var categoria_ishikawa_dados_routes = [{ path: '', component: categoria_ishikawa_dados_component_1.Categoria_ishikawaDadosComponent, children: [{ path: 'details', component: categoria_ishikawa_dadosDetails_component_1.Categoria_ishikawaDadosDetailsComponent }, { path: 'edit', component: categoria_ishikawa_dadosEdit_component_1.Categoria_ishikawaDadosEditComponent }] }];
exports.categoria_ishikawa_dados_routing = router_1.RouterModule.forChild(categoria_ishikawa_dados_routes);
//# sourceMappingURL=categoria_ishikawa_dados.routing.js.map