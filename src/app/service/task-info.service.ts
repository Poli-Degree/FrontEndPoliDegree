import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskInfoService {

  tasksService: Array<Task>; 

  constructor(private http: HttpClient) {
    this.tasksService = new Array <Task> ();
   }

   creationTask (newTask: Task) {
    this.http.post('https://polidegree.herokuapp.com/tasks',newTask).subscribe(task => console.log(task));
    
  }


  getAllTasks() {

    this.http.get<Task[]>('https://polidegree.herokuapp.com/tasks/1').subscribe (
      data => {this.tasksService=data;});
   
  }
 
  bringTasks(): Array<Task> {
  
    return this.tasksService;
  }
}