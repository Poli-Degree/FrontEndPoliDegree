import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
  online: boolean;
  title: string;
  constructor() { 
    this.title = 'Estudiante';
    this.online = false; 
  }
  color: ThemePalette = 'primary'

  ngOnInit(): void {
  }

  cambiarStatus(){
    this.online=!this.online;

  }

}
