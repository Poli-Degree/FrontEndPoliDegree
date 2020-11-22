import { Component, OnInit, Input } from '@angular/core';
import { Compromise } from 'src/app/models/compromise.model';
import { CompromiseInfoService } from 'src/app/service/compromise-info.service';

@Component({
  selector: 'app-compromise',
  templateUrl: './compromise.component.html',
  styleUrls: ['./compromise.component.css']
})
export class CompromiseComponent implements OnInit {
  
  @Input()
  /** parameter compromise: de tipo modelo Compromise  */
  compromise: Compromise;
  
  compromiseStatus: string;
  /**constructor con estado del compromiso pendiente */
  constructor(private compromiseInfoService: CompromiseInfoService) { 
    this.compromiseStatus = 'Compromiso Pendiente';
  }

  ngOnInit(): void {
    if (this.compromise.status == 0) {
      this.compromiseStatus = 'Compromiso Pendiente';
      } else {
        this.compromiseStatus = 'Compromiso Terminado';  
      }
  
  }
  /** funcion para cambiar estado a terminado */
  chooseCompromiseStatus() {
    if (this.compromise.status == 0) {
      this.compromise.status = 1;
      this.compromiseStatus = 'Compromiso Terminado';
    } else {
      this.compromise.status = 0;
      this.compromiseStatus = 'Compromiso Pendiente';
    }
     this.compromiseInfoService.updateStatus(this.compromise);
  }
}
