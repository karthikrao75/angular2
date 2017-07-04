import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector :'emplyee-details',
  template :`<h3> Inputs and Outputs!</h3>
<p> Data transfer from parent to child and child to parent</p>
<label>data to be sent to parent</label>
<input type="text" #cText (keyup)="change(cText.value)">
<p>Data from parent to child={{parentData}}</p>
  `,
  inputs:[`parentData`],
  outputs:[`childEvent`]
})
export class EmployeeComponent{
public parentData:string;
public childData:string;
childEvent=new EventEmitter();

change(value:any){
  this.childEvent.emit(value);
}
}
