import { Component, OnInit } from '@angular/core';
import { environment } from '../environment/env';
import { Compromise } from '../models/compromise.model';
import { Proyect } from '../models/proyect.model';
import { CompromiseInfoService } from '../service/compromise-info.service';

@Component({
  selector: 'app-compromises-list',
  templateUrl: './compromises-list.component.html',
  styleUrls: ['./compromises-list.component.css']
})
export class CompromisesListComponent implements OnInit {
  /**
   * Lista de compromisos 
   */
  compromises: Array<Compromise>; 
  proyects: Proyect []; 
  selectedProyect: Proyect;
  /**el constructor invoca una lista de tipo Comprmise */
  constructor(private compromiseInfoService: CompromiseInfoService) {
    this.compromises = new Array <Compromise> ();
    this.proyects = environment.Proyects;
   }
   ngOnInit(): void {
   }

  /**Funcion de llenado de compromisos */
  fillCompromises () {
    
  this.compromiseInfoService.getAllCompromises(this.selectedProyect.idProyect).subscribe((compromise)=> {
    this.compromises=compromise.data;
    console.log(this.compromises);
  }); 
  }
}
