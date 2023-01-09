import { Injectable } from '@angular/core';
import { Car, CARS } from '@app/_models';
import { Observable, of } from 'rxjs';
import { MessageService } from '@app/_services/message.service';

@Injectable({
  providedIn: 'root',
})
export class CarService {

  constructor(private messageService: MessageService) { }

  getCars(): Observable<Car[]> {
    const cars = of(CARS);
    this.messageService.add('CarService: fetched s');
    return cars;
  }

}

