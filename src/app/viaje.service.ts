import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViajeService {

  private baseUrl='http://localhost:8080/viajes';

  constructor(private http:HttpClient) { }

  getViaje(id: number):Observable<Object>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

}
