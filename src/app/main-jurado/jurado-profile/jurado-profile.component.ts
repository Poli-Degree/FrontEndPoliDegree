import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-jurado-profile',
  templateUrl: './jurado-profile.component.html',
  styleUrls: ['./jurado-profile.component.css']
})
export class JuradoProfileComponent implements OnInit {
  online: boolean;
  title: string;
  constructor() { 
    this.title = 'Jurado'; 
    this.online = false;
  }
  color: ThemePalette = 'primary';

  ngOnInit(): void {
  }

  cambiarStatus(){
    this.online=!this.online;
  }

}
