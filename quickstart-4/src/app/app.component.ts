import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
              <label>Data to be sent to child</label>
              <input type="text" #pText (keyup)="0">
              <p>Data from the child: {{childData}}</p>
              <h3> starting of view from child</h3>
              <emplyee-details [parentData]="pText.value" (childEvent)="childData=$event">Loading...</emplyee-details>
  `,
})
export class AppComponent  { name = 'Angular | karthik r rao';
public childData:string;

}
