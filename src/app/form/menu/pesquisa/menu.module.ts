import { NgModule }      from '@angular/core'; import { CommonModule } from '@angular/common';  import { SharedModule }   from '../../../shared/shared.module'; import { MenuComponent } from './menu.component'; import { menu_routing } from './menu.routing';  @NgModule({   imports:      [ CommonModule, menu_routing, SharedModule],   declarations: [ MenuComponent ],   exports:      [ MenuComponent ] }) export class MenuModule { }