import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from '../../services/crud-service.service';
import { Airline } from '../../Models/airline';

@Component({
  selector: 'app-read-airlines',
  templateUrl: './read-airlines.component.html',
  styleUrls: ['./read-airlines.component.css']
})
export class ReadAirlinesComponent implements OnInit {
  airlines: Airline[];
  constructor(private service: CrudServiceService) { }

  ngOnInit() {
    this.service.getAirlines().subscribe(res => {
      this.airlines = res;
      console.log(this.airlines);
    }, err => {
      console.log(err);
    });
  }

}
