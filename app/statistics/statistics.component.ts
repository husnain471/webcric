import { Component, OnInit } from '@angular/core';
import { RankingService } from '../ranking.service';
import { ranking } from '../model/ranking';
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  entries : ranking[] = []
  constructor( private dataService : RankingService ) { }

  ngOnInit(): void {
    this.entries = this.dataService.getEntries();
  }

}
