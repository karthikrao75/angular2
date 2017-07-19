import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class EmployeeService{
  constructor(private _http:Http){

  }
  validateJSON(){
    return  this._http.get('http://validate.jsontest.com/?json=[{"key":"value"}]').map((res:Response)=>res.json);
  }

}
