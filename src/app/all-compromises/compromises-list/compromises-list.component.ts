import { Component, OnInit } from '@angular/core';
import { environment } from 'src/app/environment/env';
import { Compromise } from 'src/app/models/compromise.model';
import { Proyect } from 'src/app/models/proyect.model';
import { CompromiseInfoService } from 'src/app/service/compromise-info.service';


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
  pageActual: number;
  items: number;
  /**el constructor invoca una lista de tipo Comprmise */
  constructor(private compromiseInfoService: CompromiseInfoService) {
    this.compromises = new Array <Compromise> ();
    this.proyects = environment.Proyects;
    this.pageActual = 1;
    this.items = 1;
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
