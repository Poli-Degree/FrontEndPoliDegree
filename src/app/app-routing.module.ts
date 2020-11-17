import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormCompromisesComponent } from './form-compromises/form-compromises.component';
import { FormProyectComponent } from './form-proyect/form-proyect.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { StudentProfileComponent } from './main-student/student-profile/student-profile.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { WelcomeViewComponent } from './welcome-view/welcome-view.component';
import { CompromisesListComponent } from './compromises-list/compromises-list.component';
import { ProyectListComponent } from './proyect-list/proyect-list.component';
import { TutorProfileComponent } from './main-tutor/tutor-profile/tutor-profile.component';
import { JuradoProfileComponent } from './main-jurado/jurado-profile/jurado-profile.component';

const routes: Routes = [
  {path: '', redirectTo: '/home',pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'registrarUsuario', component: RegistrarUsuarioComponent},
  {path: 'registrarProyecto', component: FormProyectComponent },
  {path: 'crearTarea', component: TaskFormComponent},
  {path: 'crearCompromiso', component: FormCompromisesComponent},
  {path: 'perfilEstudiante', component: StudentProfileComponent},
  {path: 'verTareas', component: TasksListComponent},
  {path: 'bienvenida', component: WelcomeViewComponent},
  {path: 'login', component: LoginComponent},
  {path: 'verCompromisos', component: CompromisesListComponent},
  {path: 'verProyectos', component: ProyectListComponent},
  {path: 'perfilTutor', component: TutorProfileComponent},
  {path: 'perfilJurado', component: JuradoProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
