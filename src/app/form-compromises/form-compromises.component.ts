import { Component, OnInit } from '@angular/core';
import { Compromise } from '../models/compromise.model';

@Component({
  selector: 'app-form-compromises',
  templateUrl: './form-compromises.component.html',
  styleUrls: ['./form-compromises.component.css']
})
export class FormCompromisesComponent implements OnInit {
  title: string;
  idCompromise: number;
  idProyect: number;
  description: string;
  dateCreate: Date;
  limitDate: Date;
  tutor: string;
  asuntoCompromiso: string;

  constructor() {
    this.title = 'Mis Compromisos'
   }
   date: Date;

  ngOnInit(): void {
    
  }

  crearCompromiso(){
    let newCompromise: Compromise={
      idCompromise: this.idCompromise,
      asuntoCompromiso: this.asuntoCompromiso,
      idProyect: this.idProyect,
      description: this.description,
      dateCreate: this.dateCreate,
      limitDate: this.limitDate,
      tutor: this.tutor
    }
    console.log(newCompromise);
  }
}
