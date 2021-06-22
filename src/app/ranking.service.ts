import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ranking } from './model/ranking';
@Injectable({
  providedIn: 'root'
})
export class RankingService {
  private rankingentry : ranking[] = [];
  constructor() {
    this.rankingentry.push({ 
              id : "1",
              imageLink : "https://www.espncricinfo.com/db/PICTURES/CMS/320400/320448.square.png",
              name : "Babar Azam",
              number : "1",
              team : "Pakistan"
     })

  }

  getEntries() : ranking [] {
    return this.rankingentry;
  }

}
