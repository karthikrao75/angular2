import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector :'emplyee-details',
  templateUrl:'./app.employee.Component.html',
  styles:['input.ng-invalid{border-left:5px solid red}','input.ng-valid{border-left:5px solid green}']
})
export class EmployeeComponent{

userForm=new FormGroup({
  name:new FormControl('karthik',[Validators.required,Validators.minLength(4)]),
  password: new FormControl('',[Validators.required,Validators.pattern('^[a-z][A-Z]$')]),
  gender: new FormControl(),
  address: new FormGroup({
    city:new FormControl('',[Validators.required]),
    country:new FormControl('India')
  })
})
  login(value:string){
    console.log(value);
  }
}
