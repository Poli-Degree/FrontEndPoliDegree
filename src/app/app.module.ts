import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Imports componentes
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { FormCompromisesComponent } from './form-compromises/form-compromises.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { HomeComponent } from './home/home.component';
import { FormProyectComponent } from './form-proyect/form-proyect.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { CompromiseComponent } from './compromise/compromise.component';
import { CompromisesListComponent } from './compromises-list/compromises-list.component';
import { ProyectListComponent } from './proyect-list/proyect-list.component';
import { ProyectComponent } from './proyect/proyect.component';
import { TaskComponent } from './task/task.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';

// Imports Angular 
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

// Imports primeng
import {ButtonModule} from 'primeng/button';
import {EditorModule} from 'primeng/editor';
import {CalendarModule} from 'primeng/calendar';
import {InputTextModule} from 'primeng/inputtext';


// Import http service
import {HttpClientModule } from '@angular/common/http';
import { TutorProfileComponent } from './tutor-profile/tutor-profile.component';
import { Menu2Component } from './menu2/menu2.component';
import { EditarProyectoComponent } from './editar-proyecto/editar-proyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarUsuarioComponent,
    StudentProfileComponent,
    FormProyectComponent,
    FormCompromisesComponent,
    TaskFormComponent,
    HomeComponent,
    MenuComponent,
    TasksListComponent,
    TaskComponent,
    LoginComponent,
    CompromiseComponent,
    CompromisesListComponent,
    ProyectListComponent,
    ProyectComponent,
    TutorProfileComponent,
    Menu2Component,
    EditarProyectoComponent
    
  ],
  /** Importacion de modulos de Angular   */
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatFormFieldModule,
    MatIconModule,
    MatSlideToggleModule,
    ButtonModule,
    EditorModule,
    CalendarModule,
    InputTextModule,
    MatToolbarModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    InputTextModule, 
    MatCardModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
