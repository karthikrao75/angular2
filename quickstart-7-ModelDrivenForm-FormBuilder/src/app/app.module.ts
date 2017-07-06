import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/** MDf changes */
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { EmployeeComponent } from './employee/app.employee.component';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule ],
  declarations: [ AppComponent, EmployeeComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
