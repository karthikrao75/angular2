import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup} from '@angular/forms';


@Component({
  selector :'emplyee-details',
  templateUrl:'./app.employee.Component.html',
  styles:['input.ng-invalid{border-left:5px solid red}','input.ng-valid{border-left:5px solid green}']
})
export class EmployeeComponent implements OnInit{
userForm:FormGroup;
constructor(private formBuilder:FormBuilder){

}
ngOnInit(){
 this.userForm=this.formBuilder.group({
   name:['karthik',[Validators.required,Validators.minLength(4)]],
   password:['',[Validators.pattern('^[a-z][A-Z]')]],
   gender:[],
   address:this.formBuilder.group({
     city:['',[Validators.required]],
     country:[]
   })
 })
}

  login(value:string){
    console.log(value);
  }
}
