import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { foodInterface } from '../foodInterface';
import { foods } from '../food';

@Component({
  selector: 'app-app-food-list',
  templateUrl: './app-food-list.component.html',
  styleUrls: ['./app-food-list.component.css']
})


export class AppFoodListComponent implements OnInit {

  foodItems: foodInterface[];

  newFood: any = {};
  constructor() { }

  ngOnInit(): void {
    this.foodItems=foods;
    console.log(this.foodItems);
  }

}
