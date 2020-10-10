import { Component, OnInit, Input } from '@angular/core';
import { Compromise } from '../models/compromise.model';
@Component({
  selector: 'app-compromise',
  templateUrl: './compromise.component.html',
  styleUrls: ['./compromise.component.css']
})
export class CompromiseComponent implements OnInit {
  
  @Input()
  compromise: Compromise;
  
  compromiseStatus: string;
  constructor() { 
    this.compromiseStatus = 'Compromiso Pendiente';
  }

  ngOnInit(): void {
  }
  chooseCompromiseStatus() {
    this.compromiseStatus = 'Compromiso Terminado';
  }
}
