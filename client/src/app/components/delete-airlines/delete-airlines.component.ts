import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from '../../services/crud-service.service';
import { Airline } from '../../Models/airline';

@Component({
  selector: 'app-delete-airlines',
  templateUrl: './delete-airlines.component.html',
  styleUrls: ['./delete-airlines.component.css']
})
export class DeleteAirlinesComponent implements OnInit {
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
  deleteAirline(event, index?) {
    console.log(event);
    this.service.deleteAirline(event).subscribe(res => { 
      console.log(res);
      this.airlines.splice(index, 1);
    }, err => console.log(err));
  }
}
