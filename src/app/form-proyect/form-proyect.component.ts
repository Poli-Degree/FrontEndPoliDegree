import { Component, OnInit } from '@angular/core';
import { environment } from '../environment/env';
import {Proyect} from '../models/proyect.model';
import { InfoProyectService } from '../service/info-proyect.service';

@Component({
  selector: 'app-form-proyect',
  templateUrl: './form-proyect.component.html',
  styleUrls: ['./form-proyect.component.css']
})
export class FormProyectComponent implements OnInit {


  newProyect: Proyect;
  title: string;
  constructor(private infoProyectService: InfoProyectService) { 
    this.title = 'Registro proyecto';
    this.newProyect = new Proyect ();
  }

  ngOnInit(): void {
   
  }

  registrar() {
    this.newProyect.idUser = environment.User.idUser;
    this.infoProyectService.creationProyect(this.newProyect);

  }

}
