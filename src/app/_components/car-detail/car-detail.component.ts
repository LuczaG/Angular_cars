import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CarService } from '@app/_services';
import { Car } from '@app/_models';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  
  car: Car | undefined

  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.getCarById();
  }

  getCarById(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.carService.getCarById(id)
      .subscribe(car => {
        console.log(car);
        this.car = car;
      });
  }

  goBack(): void {
    this.location.back();
  }
}
