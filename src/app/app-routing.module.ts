import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormCompromisesComponent } from './form-compromises/form-compromises.component';
import { FormProyectComponent } from './form-proyect/form-proyect.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { WelcomeViewComponent } from './welcome-view/welcome-view.component';

const routes: Routes = [
  {path: '', redirectTo: '/home',pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'registrarUsuario', component: RegistrarUsuarioComponent},
  {path: 'registrarProyecto', component: FormProyectComponent },
  {path: 'crearTarea', component: TaskFormComponent},
  {path: 'crearCompromiso', component: FormCompromisesComponent},
  {path: 'verPerfil', component: StudentProfileComponent},
  {path: 'verTareas', component: TasksListComponent},
  {path: 'bienvenida', component: WelcomeViewComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
