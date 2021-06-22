import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switching',
  templateUrl: './switching.component.html',
  styleUrls: ['./switching.component.css']
})
export class SwitchingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'my-app';
  selectedType : string = "A"; 

  toggle ( val : string ){
    if ( val === "A" )
      this.selectedType = "B" ;
    else
      this.selectedType = "A" ;
  }



}
