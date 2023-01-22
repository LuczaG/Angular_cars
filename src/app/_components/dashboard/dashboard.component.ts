import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Car } from '@app/_models';
import { CarService } from '@app/_services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cars: Car[] = [];
  carForm!: FormGroup;

  constructor(private carService: CarService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getCars();
    this.createCarForm();
  }

  getCars(): void {
    this.carService.getAllCars()
      .subscribe(data => this.cars = data);
  }

  createCarForm() {
    this.carForm = this.fb.group({
      carName: ['', Validators.required],
      carYear: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(4)]]
    });
  }

  onSumbit() {
    let obj: Car = {
      name: this.carForm.value.carName,
      year: this.carForm.value.carYear
    };
    this.carService.addCar(obj).subscribe(() => {
      this.getCars();
    });
    this.carForm.reset();
  }
}