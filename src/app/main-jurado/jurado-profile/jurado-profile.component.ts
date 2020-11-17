import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jurado-profile',
  templateUrl: './jurado-profile.component.html',
  styleUrls: ['./jurado-profile.component.css']
})
export class JuradoProfileComponent implements OnInit {
  
  title: string;
  constructor() { 
    this.title = 'Jurado'; 
  }

  ngOnInit(): void {
  }

}
