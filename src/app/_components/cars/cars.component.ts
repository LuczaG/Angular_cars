import { Component, OnInit } from '@angular/core';
import { Car } from '@app/_models/car';
import { CarService } from '@app/_services/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: Car[] = [];

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.getCars();
  }


  getCars(): void {
    this.carService.getCars()
      .subscribe(cars => this.cars = cars);
  }
}