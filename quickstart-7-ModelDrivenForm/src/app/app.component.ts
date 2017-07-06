import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
              <emplyee-details>Loading...</emplyee-details>
  `,
})
export class AppComponent  { name = 'Angular | karthik r rao'; }
