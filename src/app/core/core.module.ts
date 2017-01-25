import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataService } from './services/data.service';
import { Sorter } from './services/sorter';
import { TrackByService } from './services/trackby.service';
import { EnsureModuleLoadedOnceGuard } from '../shared/ensureModuleLoadedOnceGuard';
import { LoginService } from './services/login/login.service';
import { PesquisaService } from './services/pesquisa/pesquisa.service';
import { ControleService } from './services/controle/controle.service';
import { CrudService } from './services/crud/crud.service';
import { Menu_topoComponent } from './componentes/menu_topo/menu_topo.component';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [CommonModule],
  providers: [DataService, Sorter, TrackByService, LoginService, PesquisaService, ControleService, CrudService, Menu_topoComponent] // these should be singleton
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {    //Ensure that CoreModule is only loaded into AppModule

  //Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }  

}



