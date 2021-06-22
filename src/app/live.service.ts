import { Injectable } from '@angular/core';
import { live } from './model/live';

@Injectable({
  providedIn: 'root'
})
export class LiveService {

  livescore : live []  = [];

  constructor() {
      this.livescore.push( {id : "1",team_a : "IU 120-2", team_b: "KK 190-6",header: "Live", footer: "70 required in 26 balls" } );
      this.livescore.push( {id : "2",team_a : "QG 110-8", team_b: "KK yet to bat",header: "Live", footer: "QG batting first" } );

   }

  getEntries() : live[] {
    return this.livescore;
  }

}
