import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeadlineService {

  constructor(private http: HttpClient) { }

  getDeadline(): Observable<IDeadline> {
    return this.http.get<IDeadline>('http://localhost:3000/api/deadline');
  }
}
interface IDeadline {
  secondsLeft: any;
  deadline: any;
}