import { Component, OnInit } from '@angular/core';
import { CompromiseComponent } from '../compromise/compromise.component';
import { Compromise } from '../models/compromise.model';
import { CompromiseInfoService } from '../service/compromise-info.service';

@Component({
  selector: 'app-form-compromises',
  templateUrl: './form-compromises.component.html',
  styleUrls: ['./form-compromises.component.css']
})
export class FormCompromisesComponent implements OnInit {
  title: string;
  newCompromiso: Compromise;
  constructor(private compromiseInfoService: CompromiseInfoService) {
    this.title = 'Mis Compromisos';
    this.newCompromiso = new Compromise ();
   }
   date: Date;

  ngOnInit() {
    
  }

  crearCompromiso(){
    this.compromiseInfoService.creationCompromise(this.newCompromiso);
  }
}
