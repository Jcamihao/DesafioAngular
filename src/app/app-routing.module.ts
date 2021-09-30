import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { DeleteUsuarioComponent } from './delete-usuario/delete-usuario.component';
import { AddUsuarioComponent } from './add-usuario/add-usuario.component';
import { NgModule, Component, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  { path: '', component: SidebarComponent },
  { path: 'usuario/:id', component: PerfilComponent },
  { path: 'excluir/:id', component: DeleteUsuarioComponent },
  { path: 'usuarionovo', component: AddUsuarioComponent },
  { path: 'editarusuario/:id', component: EditarUsuarioComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
