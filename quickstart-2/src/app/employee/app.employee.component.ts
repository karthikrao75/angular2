import { Component } from '@angular/core';

@Component({
  selector :'emplyee-details',
  //Interpolation and property binging
  template :`<h3>{{pageHeader}}</h3>
   <img [src]='imageUrl' /> <img bind-src='imageUrl' /><br><br>
   <input type="text" value="angular">
   <h4 class="colorClass">Whats your name ?</h4>
   <h4 class="colorClass" [class]="boldClass">My Name is Karthik -class will be overriden in this case</h4>
   <p class="colorClass" [class.boldClass]='addBoldClass'>false</p>
   <p [ngClass]='addClass()'>multiple class to add using ngClass</p>
   <button style="color:red" [style.font-weight]="isBold?'bold':'normal'">style Binding</button>
   <button [ngStyle]='addStyle()'>Multiple style binding using ngStyle</button>
   `,
   styleUrls : ['./app.employee.component.css']
   /*
 difference between attribute and property

 $0.getAttribute('value')
"angular"
$0.value
"angular"

when input text box value changed to karthik in UI

$0.getAttribute('value')
"angular"
$0.value
"karthik"

so attribute value is one time setup/initialization  where as property will update each time, hence angular works with proprty binding not attribute.

in some cases where property binding is not possible angular provides its own attributes to bind with prefix "ng"

   */
})
export class EmployeeComponent{
  pageHeader=' Employee Details !';
  imageUrl:string='http://lorempixel.com/400/200';
  addBoldClass:boolean=false;
  addColorClass:boolean=true;
  addItalicClass:boolean=true;
  fontSize=20;
  isBold:boolean=true;
  isItalic:boolean=true;
  addClass(){
    let classes={
      boldClass:this.addBoldClass,
      colorClass:this.addColorClass,
      italicClass:this.addItalicClass
    }

    return classes;
  }

  addStyle(){
    let styles={
        'font-size.px':this.fontSize,
        'font-style':this.isItalic?'italic':'normal'
    }

    return styles;
  }
}
