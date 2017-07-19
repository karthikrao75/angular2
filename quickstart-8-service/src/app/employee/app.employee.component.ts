import { Component } from '@angular/core';
import {EmployeeService} from './app.employee.service';

@Component({
  selector :'emplyee-details',
  template :`<h3> Employee Details !</h3>
              <button (click)="validateJSON()">Click Me to get a response from the service </button>
  `,
  styles : ['h3{color:red}'],
  providers:[EmployeeService]
})
export class EmployeeComponent {

constructor(private _employeeService:EmployeeService){

}
  validateJSON(){
    alert(this._employeeService.validateJSON());
  }
}
