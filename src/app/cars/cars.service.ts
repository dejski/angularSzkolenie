import { Injectable } from '@angular/core';
import { Car } from './models/car';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CarsService {
  private apiUrl = 'http://localhost:3000/api/cars';

  constructor(private http: Http) { }

  getCars(): Observable<Car[]> {
    return this.http.get(this.apiUrl).pipe(
      map((res) => res.json()));
  }

}


