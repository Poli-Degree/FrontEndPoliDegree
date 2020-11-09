import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { InfoProyectService } from '../service/info-proyect.service';
import { environment } from '../environment/env';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
  online: boolean;
  title: string;
  constructor(private infoProyectService: InfoProyectService) { 
    this.title = 'Estudiante';
    this.online = false; 
  }
  color: ThemePalette = 'primary'

  ngOnInit(): void {
    this.infoProyectService.getAllProyects(environment.User.idUser).subscribe((proyect)=> {
      environment.Proyects = proyect.data;});
  }

  cambiarStatus(){
    this.online=!this.online;

  }

}
