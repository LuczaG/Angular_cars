import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CarService } from '@app/_services';
import { Car } from '@app/_models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  car!: Car;
  carForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
    private location: Location,
    private fb: FormBuilder) 
      { }

  ngOnInit(): void {
    this.getCarById();
    this.createCarForm();
  }

  createCarForm() {
    this.carForm = this.fb.group({
      carName: ['', Validators.required],
      carYear: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(4)]]
    });
  }

  getCarById(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.carService.getCarById(id)
      .subscribe(car => {
        console.log(car);
        this.car = car;
      });
  }

  save(): void {
    this.carService.updateCar(this.car).subscribe(
      () => this.goBack()
    );
  }

  delete(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    confirm("Are you sure you want to delete this car?")
      ? this.carService.deleteCar(id).subscribe(
        () => this.goBack())
      : "";
  }

  goBack(): void {
    this.location.back();
  }
}
