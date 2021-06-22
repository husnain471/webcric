import { Injectable } from '@angular/core';
import { newsfeed } from './model/newsfeed';
@Injectable({
  providedIn: 'root'
})
export class NewsfeedService {
  private newsentry : newsfeed[] = [];
  constructor() {
    this.newsentry.push(  { id : "1",
                          heading : "South Africa bowlers combine to jolt West Indies in second session after Quinton de Kock 96" ,
                          news : "All four of Rabada, Ngidi, Nortje and Maharaj got a wicket each, as West Indies' top order collapsed." , 
                          photopath : "https://p.imgci.com/db/PICTURES/CMS/323500/323504.4.jpg" ,
                          date :  new Date("2021-06-16")
                        } );

    this.newsentry.push(  { id : "2",
                        heading : "Danish Aziz's 13-ball 45 helps seal qualification for Karachi Kings" ,
                        news : "Arish Ali's four-for on debut in vain for Quetta Gladiators, who finish season with only four points." , 
                        photopath : "https://p.imgci.com/db/PICTURES/CMS/323400/323480.2.jpg" ,
                        date :  new Date("2021-06-14")
                      } );
 

  }
  getEntries() : newsfeed[] {
    return this.newsentry;
  }


}
