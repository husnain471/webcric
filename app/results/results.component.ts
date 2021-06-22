import { Component, OnInit } from '@angular/core';
import {result} from '../model/result';
import { ResultService } from '../result.service';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  entries : result[] = [];

  constructor ( private dataService : ResultService ){ }

  ngOnInit(): void {
    this.dataService.getEntries().subscribe(entries => {
      this.entries = entries;
    });
  
  }

}
