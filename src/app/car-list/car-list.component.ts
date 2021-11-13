import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
})
export class CarListComponent implements OnInit {
  cars: string[] = ['bmw', 'mers', 'lada', 'kia'];

  constructor() {}

  ngOnInit(): void {}
}
