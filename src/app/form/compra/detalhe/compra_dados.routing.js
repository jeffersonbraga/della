"use strict";
var router_1 = require('@angular/router');
var compra_dados_component_1 = require('./compra_dados.component');
var compra_dadosDetails_component_1 = require('./compra_dadosDetails.component');
var compra_dadosEdit_component_1 = require('./compra_dadosEdit.component');
var compra_dados_routes = [
    { path: '', component: compra_dados_component_1.CompraDadosComponent,
        children: [
            { path: 'details', component: compra_dadosDetails_component_1.CompraDadosDetailsComponent },
            { path: 'edit', component: compra_dadosEdit_component_1.CompraDadosEditComponent }
        ]
    }
];
exports.compra_dados_routing = router_1.RouterModule.forChild(compra_dados_routes);
//# sourceMappingURL=compra_dados.routing.js.map