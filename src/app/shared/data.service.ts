import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // mock API
  getMockData(): Observable<Object> {
    return this.http.get('assets/mock-data.json');
  }
}
