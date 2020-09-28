import { Component, OnInit } from '@angular/core';
import {Proyect} from '../models/proyect.model';

@Component({
  selector: 'app-form-proyect',
  templateUrl: './form-proyect.component.html',
  styleUrls: ['./form-proyect.component.css']
})
export class FormProyectComponent implements OnInit {

  titleProyect: string;
  objects: string;
  metodologico: string;
  teorico: string;
  references: string;
  title: string;
  constructor() { 
    this.title = 'Registro proyecto';
  }

  ngOnInit(): void {
   
  }

  registrar() {

    let newProyect: Proyect= {
      idProyect: 1,
      titleProyect: this.titleProyect,
      objects: this.objects,
      metodologia: this.metodologico,
      teorico: this.teorico,
      references: this.references,
      tutor: 321
    }
 
    console.log(newProyect);
  }

}
