import { Component } from '@angular/core';

@Component({
  selector :'emplyee-details',
  template :`<h3>Pipe or Filters</h3>
    name:{{name}}
    <br />
    name-uppercase:{{name|uppercase}}<br/>
    name-lowercase:{{name|lowercase}}<br />
    name-slice-starting from index two:{{name|slice:'2'}}<br />
    name-slice-starting from index two up to index 4:{{name|slice:'2':'4'}}<br />
  <!--  name-replace part of string:{{name|replace:'The':'Hello '}}<br /> -->
    8.16-before decimal 2 index after decimal min 3 digit and max 8{{see|number:'1.3-8'}}<br/>
    currency:{{8.99|currency:'EUR':true}}<br/>
    date -full date:{{date|date:fullDate}}- for more check angular site
  `
  ,
})
export class EmployeeComponent{

  public name:string='The Joker';
  public date:Date=new Date();
  public see:number=8.16;
}
