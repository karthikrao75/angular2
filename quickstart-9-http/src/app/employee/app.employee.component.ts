import { Component } from '@angular/core';
import {EmployeeService} from './app.employee.service';
import {Response} from '@angular/http';

@Component({
  selector :'emplyee-details',
  template :`<h3> Employee Details !</h3>
              <button (click)="validateJSON()">Click Me to get a response from the http </button>
  `,
  styles : ['h3{color:red}'],
  providers:[EmployeeService]
})
export class EmployeeComponent {
emp:any;
constructor(private _employeeService:EmployeeService){

}
  validateJSON(){
    this._employeeService.validateJSON().subscribe(res=> this.success(res));

  }

  success(res:any){
    alert(res.data);
  }
}
