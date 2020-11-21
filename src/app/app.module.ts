import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PdfMakeWrapper } from 'pdfmake-wrapper';
import pdfFonts from "pdfmake/build/vfs_fonts"; // fonts provided for pdfmake
 
// Set the fonts to use
PdfMakeWrapper.setFonts(pdfFonts);

// Imports componentes
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { StudentProfileComponent } from './main-student/student-profile/student-profile.component';
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
import {ListboxModule} from 'primeng/listbox';
import {AutoCompleteModule} from 'primeng/autocomplete';


// Import http service
import {HttpClientModule } from '@angular/common/http';
import { EditarProyectoComponent } from './editar-proyecto/editar-proyecto.component';

import { TutorProfileComponent } from './main-tutor/tutor-profile/tutor-profile.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { StudentMenuComponent } from './main-student/student-menu/student-menu.component';
import { TutorMenuComponent } from './main-tutor/tutor-menu/tutor-menu.component';
import { JuradoMenuComponent } from './main-jurado/jurado-menu/jurado-menu.component';
import { JuradoProfileComponent } from './main-jurado/jurado-profile/jurado-profile.component';
import { ActaCalificacionComponent } from './acta-calificacion/acta-calificacion.component';
import { FormatoEvaluacionComponent } from './formato-evaluacion/formato-evaluacion.component';
import { DocumentsComponent } from './documents/documents.component';

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
    EditarProyectoComponent,
    MainMenuComponent,
    StudentMenuComponent,
    TutorMenuComponent,
    JuradoMenuComponent,
    JuradoProfileComponent,
    ActaCalificacionComponent,
    FormatoEvaluacionComponent,
    DocumentsComponent
    
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
    HttpClientModule,
    ListboxModule,
    AutoCompleteModule
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
