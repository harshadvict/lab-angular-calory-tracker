import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { foodInterface } from '../foodInterface';
import { foods } from '../food';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-new-food',
  templateUrl: './new-food.component.html',
  styleUrls: ['./new-food.component.css']
})
export class NewFoodComponent implements OnInit {

  foodItems:foodInterface[];
  isShow=true;
  constructor() { }
  newFood:any={};
  ngOnInit(): void {
    this.foodItems=foods;
  }
  displayAdd(){
    this.isShow=false;
  }
  addFood(newFood){
    const newObj: foodInterface =Object.assign({},this.newFood);
    console.log(newFood);
    this.newFood.name=newFood.name;
    this.newFood.calories=newFood.calories;
    this.newFood.count=0;
    this.newFood.image=newFood.image;
    this.foodItems.push(newObj);
  }
  formReset(formval : NgForm){
    formval.reset();
  }
}
