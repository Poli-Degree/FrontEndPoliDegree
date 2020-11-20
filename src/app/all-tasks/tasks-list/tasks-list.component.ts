import { Component, OnInit } from '@angular/core';
import { environment } from 'src/app/environment/env';
import { Proyect } from 'src/app/models/proyect.model';
import { Task } from 'src/app/models/task.model';
import { TaskInfoService } from 'src/app/service/task-info.service';


@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  /**
   * Lista de proyectos 
   */
  tasks: Array<Task>;
  proyects: Proyect []; 
  selectedProyect: Proyect;
  /**el constructor invoca una lista de tipo Task */
  constructor(private taskInfoService: TaskInfoService) {
    this.tasks = new Array <Task> ();
    this.proyects = environment.Proyects;
   }
   /**obtiene los tareas */
   ngOnInit(): void {
   }
   /**Funcion de llenado de tareas */
  fillTasks () {
    
  this.taskInfoService.getAllTasks(this.selectedProyect.idProyect).subscribe((task)=> {
    this.tasks=task.data;
    console.log(this.tasks);
  });
  }
}