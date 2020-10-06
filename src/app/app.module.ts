import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


import { FormProyectComponent } from './form-proyect/form-proyect.component';

import {ButtonModule} from 'primeng/button';
import {EditorModule} from 'primeng/editor';
import { FormCompromisesComponent } from './form-compromises/form-compromises.component';
import {CalendarModule} from 'primeng/calendar';
import {InputTextModule} from 'primeng/inputtext';
import { TaskFormComponent } from './task-form/task-form.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrarUsuarioComponent,
    StudentProfileComponent,
    FormProyectComponent,
    FormCompromisesComponent,
    TaskFormComponent,
    HomeComponent
  ],
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
    InputTextModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
