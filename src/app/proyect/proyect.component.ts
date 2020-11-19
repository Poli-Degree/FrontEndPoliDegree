import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../environment/env';
import { Proyect } from '../models/proyect.model';

@Component({
  selector: 'app-proyect',
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.css']
})
export class ProyectComponent implements OnInit {

  @Input()
  proyect: Proyect;
  constructor() { }

  ngOnInit(): void {
  }

  editar (proyect: Proyect) {
    environment.proyect = proyect;
  }

}
