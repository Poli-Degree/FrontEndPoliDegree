import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskInfoService } from '../service/task-info.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  tasks: Array<Task>; 

  constructor(private taskInfoService: TaskInfoService) {
    this.tasks = new Array <Task> ();
   }

   ngOnInit(): void {
    this.taskInfoService.getAllTasks();
   }

 async fillTasks () {
    
  this.tasks= this.taskInfoService.bringTasks();
    
    console.log(this.tasks);
  }
}