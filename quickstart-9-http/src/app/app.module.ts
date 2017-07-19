import { NgModule }      from '@angular/core';
import {HttpModule} from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { EmployeeComponent } from './employee/app.employee.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, EmployeeComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
