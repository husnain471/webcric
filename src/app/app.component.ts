import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  selectedType : string = "A"; 
  constructor(){}

  toggle ( event : Event ){
    //console.log(event);
    //var target = event.target || event.srcElement || event.currentTarget;
    //console.log(target);
    let elementId: string = (event.target as Element).id;
    console.log(elementId);
    if ( elementId === "user" )
      this.selectedType = "B";
    else if ( elementId == "admin" )
      this.selectedType = "A";  
    //var idAttr = target.attributes.id;
    //console.log(idAttr);
    
  //  var value = idAttr.nodeValue;
  }


}
