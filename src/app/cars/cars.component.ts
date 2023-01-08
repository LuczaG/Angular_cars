import { Component, OnInit } from '@angular/core';
import { Car } from '../_model/car';
import { CARS } from '../_model/mock-cars';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars = CARS;
  selectedCar?: Car;

  constructor() { }

  ngOnInit(): void {

  }
  
  onSelect(car: Car): void {
    this.selectedCar = car;
  }
}
