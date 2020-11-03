import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskInfoService } from '../service/task-info.service';

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
  /**el constructor invoca una lista de tipo Task */
  constructor(private taskInfoService: TaskInfoService) {
    this.tasks = new Array <Task> ();
   }
   /**obtiene los tareas */
   ngOnInit(): void {
    this.taskInfoService.getAllTasks();
   }
   /**Funcion de llenado de tareas */
  fillTasks () {
    
  this.taskInfoService.getAllTasks().subscribe((task)=> {
    this.tasks=task.data;
    console.log(this.tasks);
  });
  }
}