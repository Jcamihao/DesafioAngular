import { SigninComponent } from './signin/signin.component';
import { EditarUsuarioComponent } from './Crud/editar-usuario/editar-usuario.component';
import { DeleteUsuarioComponent } from './Crud/delete-usuario/delete-usuario.component';
import { AddUsuarioComponent } from './Crud/add-usuario/add-usuario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PerfilComponent } from './perfil/perfil.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', component: SigninComponent },
  { path: 'usuario/:id', component: PerfilComponent },
  { path: 'excluir/:id', component: DeleteUsuarioComponent },
  { path: 'addcontato', component: AddUsuarioComponent },
  { path: 'editarusuario/:id', component: EditarUsuarioComponent },
  { path: 'home', component: SidebarComponent },
  { path: 'registrar', component: SignupComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
