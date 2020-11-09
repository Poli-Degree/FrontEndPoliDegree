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
  /**
   * -parameter title: nombre de la vista del formulario
   * -parameter newCompromise: compromiso que se creara
   */
  title: string;
  newCompromiso: Compromise;
  /**constructor de asignacion del title y creacion del nuevo compromiso */
  constructor(private compromiseInfoService: CompromiseInfoService) {
    this.title = 'Nuevo Compromiso';
    this.newCompromiso = new Compromise ();
   }
   date: Date;

  ngOnInit() {
    
  }
  /**funcion de creacion de compromiso */
  crearCompromiso(){
    this.compromiseInfoService.creationCompromise(this.newCompromiso);
  }
}
