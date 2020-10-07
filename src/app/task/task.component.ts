import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input()
  task: Task;
  taskStatus: string;
  constructor() {
    this.taskStatus = 'Tarea Pendiente';
  }

  ngOnInit(): void {
  }

  chooseTaskStatus() {
    this.taskStatus = 'Tarea Terminada';
  }
}
