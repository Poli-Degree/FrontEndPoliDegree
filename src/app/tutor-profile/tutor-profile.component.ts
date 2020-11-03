import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutor-profile',
  templateUrl: './tutor-profile.component.html',
  styleUrls: ['./tutor-profile.component.css']
})
export class TutorProfileComponent implements OnInit {
  
  title: string;
  constructor() { 
    this.title = 'Tutor'; 
  }

  ngOnInit(): void {
  }

}
