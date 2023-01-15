import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '@app/_models';
import { environment } from 'src/environments/environment';

const httpOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class CarService {

  constructor(private http: HttpClient) { }

  getAllCars() {
    return this.http.get<Car[]>(`${environment.apiUrl}/cars`, httpOption);
  }

  getCarById(carId: Number) {
    return this.http.get<Car>(`${environment.apiUrl}/cars/${carId}`, httpOption);
  }

  addCar(car: Car) {
    return this.http.post<Car>(`${environment.apiUrl}/cars`, car, httpOption);
  }
}