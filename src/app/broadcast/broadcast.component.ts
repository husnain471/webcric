import { Component, OnInit } from '@angular/core';
import { live } from '../model/live';
import { LiveService } from '../live.service';

@Component({
  selector: 'app-broadcast',
  templateUrl: './broadcast.component.html',
  styleUrls: ['./broadcast.component.css']
})
export class BroadcastComponent implements OnInit {

  entries : live[] = [];
  constructor( private dataservice : LiveService  ) { }

  ngOnInit(): void {
    this.entries = this.dataservice.getEntries();
  }

}
