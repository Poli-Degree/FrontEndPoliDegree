import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/app/environment/env';
import { Proyect } from 'src/app/models/proyect.model';


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
