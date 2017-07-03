import { Component } from '@angular/core';

@Component({
  selector :'emplyee-details',
  templateUrl :'./app.employee.component.html',
// event Binding is done using (), where as property binding is done using []
// property binding is from component to view, event binding from view to component
// two way binding

// 3 types of directives 1. component 2. structural directives 3. attribute directives


})
export class EmployeeComponent{
public fname:string;
public lname:string;
public colors:Array<string>=['red','blue','green'];

constructor(){
  this.fname="First Name";
  this.lname="last Name";
}
  clickMe(value:string){
    console.log(value);
    // button 1 -- value inside the text box
    // button 2 -- <input type="text">
    // button 3 -- MouseEvent {isTrusted: true, screenX: 637, screenY: 214, clientX: 637, clientY: 148…}
  }
}
