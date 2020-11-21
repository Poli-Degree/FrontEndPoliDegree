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
import { CompromisesListComponent } from './compromises-list/compromises-list.component';
import { ProyectListComponent } from './proyect-list/proyect-list.component';
import { EditarProyectoComponent } from './editar-proyecto/editar-proyecto.component';
import { TutorProfileComponent } from './main-tutor/tutor-profile/tutor-profile.component';
import { JuradoProfileComponent } from './main-jurado/jurado-profile/jurado-profile.component';
import { DocumentsComponent } from './documents/documents.component';
import { ActaCalificacionComponent } from './acta-calificacion/acta-calificacion.component';
import { FormatoEvaluacionComponent } from './formato-evaluacion/formato-evaluacion.component';

const routes: Routes = [
  {path: '', redirectTo: '/home',pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'registrarUsuario', component: RegistrarUsuarioComponent},
  {path: 'registrarProyecto', component: FormProyectComponent },
  {path: 'crearTarea', component: TaskFormComponent},
  {path: 'crearCompromiso', component: FormCompromisesComponent},
  {path: 'perfilEstudiante', component: StudentProfileComponent},
  {path: 'verTareas', component: TasksListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'verCompromisos', component: CompromisesListComponent},
  {path: 'misProyectos', component: ProyectListComponent},
  {path: 'verPerfilTutor', component: TutorProfileComponent},
  {path: 'editarProyecto', component: EditarProyectoComponent},
  {path: 'documentos', component: DocumentsComponent},
  {path: 'actaSustentacion', component: ActaCalificacionComponent},
  {path: 'formatoEvaluacion', component: FormatoEvaluacionComponent},

  {path: 'verProyectos', component: ProyectListComponent},
  {path: 'perfilTutor', component: TutorProfileComponent},
  {path: 'perfilJurado', component: JuradoProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
