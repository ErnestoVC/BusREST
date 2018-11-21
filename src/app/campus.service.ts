import { Campus } from './model/campus';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampusService {

private baseUrl='http://localhost:8090/campus';

  constructor(private http:HttpClient) { }

  getCampus(id:number):Observable<Object>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCampus(campus: Object):Observable<object>{
    return this.http.post(`${this.baseUrl}`, campus);
  }

  updateCampus(id:number, value:any):Observable<object>{
    return this.http.post(`${this.baseUrl}`, value);
  }

  deleteCampus(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`,
                             {responseType:'text'});
  }

  getCampusList():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }
}
