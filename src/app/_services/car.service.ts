import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '@app/_models';
import { catchError, tap } from 'rxjs/operators';
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
    return this.http.post<Car>(`${environment.apiUrl}/cars`, car, httpOption).pipe(
      tap(car => console.log(`insterted car = ${JSON.stringify(car)}`)),
      catchError(error => error)
    );
  }

  updateCar(car: Car) {
    return this.http.put<Car>(`${environment.apiUrl}/cars/${car.id}`, car, httpOption).pipe(
      tap(updatedCar => console.log(`updated car = ${JSON.stringify(updatedCar)}`)),
      catchError(error => error)
    );
  }

  deleteCar(carId: Number) {
    return this.http.delete<Car>(`${environment.apiUrl}/cars/${carId}`, httpOption).pipe(
      tap(() => console.log(`deleted car with id = ${carId}`)),
      catchError(error => error)
    );
  }
}