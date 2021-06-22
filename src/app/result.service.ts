import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { result } from './model/result';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ResultService {
  
  resultentry : result[] = [];
  private _entriesSubject = new BehaviorSubject<result[]>( this.resultentry );



  constructor(private http: HttpClient){ }

  getEntries() : Observable<result[]> {  

    return this.http.get<result[]>("http://localhost:3000/all")
  
  }
  
  
  
  
  }