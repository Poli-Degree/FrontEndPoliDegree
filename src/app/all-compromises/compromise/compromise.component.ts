import { Component, OnInit, Input } from '@angular/core';
import { Compromise } from 'src/app/models/compromise.model';

@Component({
  selector: 'app-compromise',
  templateUrl: './compromise.component.html',
  styleUrls: ['./compromise.component.css']
})
export class CompromiseComponent implements OnInit {
  
  @Input()
  /** parameter compromise: de tipo modelo Compromise  */
  compromise: Compromise;
  
  compromiseStatus: string;
  /**constructor con estado del compromiso pendiente */
  constructor() { 
    this.compromiseStatus = 'Compromiso Pendiente';
  }

  ngOnInit(): void {
  }
  /** funcion para cambiar estado a terminado */
  chooseCompromiseStatus() {
    this.compromiseStatus = 'Compromiso Terminado';
  }
}
