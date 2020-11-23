import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-tutor-profile',
  templateUrl: './tutor-profile.component.html',
  styleUrls: ['./tutor-profile.component.css']
})
export class TutorProfileComponent implements OnInit {
  online: boolean;
  title: string;
  constructor() { 
    this.title = 'Tutor'; 
    this.online = false; 
  }
  color: ThemePalette = 'primary';

  ngOnInit(): void {
  }

  cambiarStatus(){
    this.online=!this.online;

  }

}
