import { Component, OnInit } from '@angular/core';
import { Compromise } from '../models/compromise.model';
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
  /**el constructor invoca una lista de tipo Comprmise */
  constructor(private compromiseInfoService: CompromiseInfoService) {
    this.compromises = new Array <Compromise> ();
   }
  /**obtiene los compromisos */
   ngOnInit(): void {
    this.compromiseInfoService.getAllCompromises();
   }

  /**Funcion de llenado de compromisos */
  fillCompromises () {
    
  this.compromiseInfoService.getAllCompromises().subscribe((compromise)=> {
    this.compromises=compromise.data;
    console.log(this.compromises);
  }); 
  }
}
