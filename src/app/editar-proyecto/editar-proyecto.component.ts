import { Component, OnInit } from '@angular/core';
import {Proyect} from '../models/proyect.model';
import { InfoProyectService } from '../service/info-proyect.service';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {
  currentProyect: Proyect;

  constructor(private infoProyectService: InfoProyectService) {
    this.currentProyect = this.currentProyect;
  }

  ngOnInit(): void {
  }

  

}
