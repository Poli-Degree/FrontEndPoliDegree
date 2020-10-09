import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  
  constructor() { }

  hide = true;

  ngOnInit(): void {
  }

}
