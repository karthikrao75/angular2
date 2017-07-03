import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// added below for adding ngModel
import { FormsModule } from '@angular/forms';
//added below for adding ngSwitchWhen
import { CommonModule } from '@angular/common';


import { AppComponent }  from './app.component';
import { EmployeeComponent } from './employee/app.employee.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, CommonModule ],
  declarations: [ AppComponent, EmployeeComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
