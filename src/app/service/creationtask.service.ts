import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class CreationtaskService {

  task: Task; 

  constructor() {
    this.task = new Task();
   }

  

  }

