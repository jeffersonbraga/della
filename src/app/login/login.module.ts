import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Usuario } from '../modelo/usuario';
import { SharedModule }   from '../shared/shared.module';
// import { CoreModule }   from '../core/core.module';
import { login_routing } from './login.routing';
import { GithubComponent } from '../github/github.component';

@NgModule({
  imports:      [ CommonModule, login_routing, SharedModule ], //, CoreModule, Usuario ],
  declarations: [ LoginComponent, GithubComponent ],
  exports:      [ LoginComponent ]
})
export class LoginModule { }