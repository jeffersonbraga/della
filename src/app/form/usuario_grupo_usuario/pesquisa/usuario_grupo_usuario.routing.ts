import { Routes, RouterModule } from '@angular/router';  import { Usuario_grupo_usuarioComponent } from './usuario_grupo_usuario.component';  const usuario_grupo_usuario_routes: Routes = [   { path: 'usuario_grupo_usuario*', pathMatch:'full', redirectTo: '/usuario_grupo_usuario' },   { path: 'usuario_grupo_usuario', component: Usuario_grupo_usuarioComponent} ];  export const usuario_grupo_usuario_routing = RouterModule.forChild(usuario_grupo_usuario_routes);