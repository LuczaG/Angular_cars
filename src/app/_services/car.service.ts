import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Car, CARS } from '@app/_models';
import { MessageService } from '@app/_services/message.service';

@Injectable({
  providedIn: 'root',
})
export class CarService {

  constructor(private messageService: MessageService) { }

  getCars(): Observable<Car[]> {
    const cars = of(CARS);
    this.messageService.add('CarService: fetched cars');
    return cars;
  }

  getCar(id: number): Observable<Car> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const car = CARS.find(c => c.id === id)!;
    this.messageService.add(`CarService: fetched car id=${id}`);
    return of(car);
  }

}

