import { Component, OnInit } from '@angular/core';
import { Car } from '@app/_models/car';
import { CarService } from '@app/_services/car.service';
import { MessageService } from '@app/_services/message.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: Car[] = [];

  selectedCar?: Car;

  constructor(private carService: CarService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getCars();
  }

  onSelect(car: Car): void {
    this.selectedCar = car;
    this.messageService.add(`CarsComponent: Selected car id=${car.id}`);
  }

  getCars(): void {
    this.carService.getCars()
      .subscribe(cars => this.cars = cars);
  }
}


