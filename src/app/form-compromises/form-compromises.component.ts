import { Component, OnInit } from '@angular/core';
import { CompromiseComponent } from '../compromise/compromise.component';
import { environment } from '../environment/env';
import { Compromise } from '../models/compromise.model';
import { Proyect } from '../models/proyect.model';
import { CompromiseInfoService } from '../service/compromise-info.service';
import { InfoProyectService } from '../service/info-proyect.service';

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
  selectedProyect: Proyect;
  proyects: Proyect [];
  

  /**constructor de asignacion del title y creacion del nuevo compromiso */
  constructor(private compromiseInfoService: CompromiseInfoService, private infoProyectService: InfoProyectService) {
    this.title = 'Nuevo Compromiso';
    this.newCompromiso = new Compromise ();
    this.proyects = environment.Proyects;
   }
   

  ngOnInit() {
    this.infoProyectService.getAllProyects(environment.User.idUser).subscribe((proyect)=> {
      environment.Proyects = proyect.data;});
      this.proyects = environment.Proyects;
  }
  /**funcion de creacion de compromiso */
  crearCompromiso(){
    this.newCompromiso.idProyect = this.selectedProyect.idProyect;
    this.compromiseInfoService.creationCompromise(this.newCompromiso);
  }
}
