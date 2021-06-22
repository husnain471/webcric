import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{
  constructor(
    private router: Router
  ){}
  userName:string="";

  // The function is called on click to the tournament clubmatch()
  feed() {
    this.router.navigateByUrl('/');
  }
  tournament() {
   this.router.navigateByUrl('/tournament');
  }

  results = (): void => {
    this.router.navigateByUrl('/result');
  }


  live = (): void =>{
    this.router.navigateByUrl('/live');
  }
  rankings = (): void =>{
    this.router.navigateByUrl('/rankings')
  }
  contribute = (): void =>{}
  admin = (): void =>{
    //(click)= "toggle('A')"
    //this.router.navigateByUrl('/signin')
  }
}
