import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class EmployeeService{
  constructor(private _http:Http){

  }
  validateJSON(){
    return  this._http.get('http://validate.jsontest.com/?json=[{"key":"value"}]').map((res:Response)=>res.json)
    .catch(this.errorHandler);
  }

errorHandler(err:any){
 console.log(err);
 return Observable.throw(err);
}
}
