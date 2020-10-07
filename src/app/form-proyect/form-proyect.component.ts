import { Component, OnInit } from '@angular/core';
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
    this.infoProyectService.creationProyect(this.newProyect);

  }

}
