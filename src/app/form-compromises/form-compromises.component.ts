import { Component, OnInit } from '@angular/core';
import { Compromise } from '../models/compromise.model';

@Component({
  selector: 'app-form-compromises',
  templateUrl: './form-compromises.component.html',
  styleUrls: ['./form-compromises.component.css']
})
export class FormCompromisesComponent implements OnInit {
  title: string;
  miCompromiso: Compromise;
  constructor() {
    this.title = 'Mis Compromisos'
   }
   date: Date;

  ngOnInit(): void {
    
  }

}
