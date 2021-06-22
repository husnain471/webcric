import { Component, OnInit } from '@angular/core';
import { newsfeed } from '../model/newsfeed';
import { NewsfeedService } from '../newsfeed.service';

@Component({
  selector: 'app-homecontent',
  templateUrl: './homecontent.component.html',
  styleUrls: ['./homecontent.component.css']
})
export class HomecontentComponent implements OnInit {
  
  entries : newsfeed[] = []
  constructor(private dataService : NewsfeedService) {}

  ngOnInit(): void {
    // on loading get all entries from the service.
    this.entries = this.dataService.getEntries();
  }

}
