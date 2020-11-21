import { Component, OnInit } from '@angular/core';
import { environment } from 'src/app/environment/env';
import { Compromise } from 'src/app/models/compromise.model';
import { Proyect } from 'src/app/models/proyect.model';
import { CompromiseInfoService } from 'src/app/service/compromise-info.service';
import { InfoProyectService } from 'src/app/service/info-proyect.service';



@Component({
  selector: 'app-form-compromises-tutor',
  templateUrl: './form-compromises-tutor.component.html',
  styleUrls: ['./form-compromises-tutor.component.css']
})
export class FormCompromisesTutorComponent implements OnInit {
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
