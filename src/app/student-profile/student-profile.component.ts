import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { InfoProyectService } from '../service/info-proyect.service';
import { environment } from '../environment/env';
import { UserInfoService } from '../service/user-info.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
  online: boolean;
  title: string;
  constructor(private infoProyectService: InfoProyectService, private userInfoService: UserInfoService ) { 
    this.title = 'Estudiante';
    this.online = false; 
  }
  color: ThemePalette = 'primary'

  ngOnInit(): void {
    this.userInfoService.getAllUsers().subscribe(user => 
     environment.Users = user.data);

    
    this.infoProyectService.getAllProyects(environment.User.idUser).subscribe((proyect)=> {
      environment.Proyects = proyect.data;});
  }

  cambiarStatus(){
    this.online=!this.online;

  }

}
