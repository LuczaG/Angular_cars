import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../_models/car';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  
  @Input() car?: Car;

  constructor() { }

  ngOnInit(): void {

  }
}
