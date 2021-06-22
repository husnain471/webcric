import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { result } from './model/result';
@Injectable({
  providedIn: 'root'
})
export class ResultService {
  private _resultentry:result[]=[];
}
