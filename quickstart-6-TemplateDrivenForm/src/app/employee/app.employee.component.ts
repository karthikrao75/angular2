import { Component } from '@angular/core';

@Component({
  selector :'emplyee-details',
  templateUrl:'./app.employee.Component.html',
  styles:['input.ng-invalid{border-left:5px solid red}','input.ng-valid{border-left:5px solid green}']
})
export class EmployeeComponent{

  login(value:string){
    console.log(value);
  }
}
