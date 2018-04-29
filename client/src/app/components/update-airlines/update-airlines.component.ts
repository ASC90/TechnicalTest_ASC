import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from '../../services/crud-service.service';
import { Airline } from '../../Models/airline';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-airlines',
  templateUrl: './update-airlines.component.html',
  styleUrls: ['./update-airlines.component.css']
})
export class UpdateAirlinesComponent implements OnInit {
  airlines: Airline[];
  id: string;
  constructor(private service: CrudServiceService, private router: Router) { }

  ngOnInit() {
    this.service.getAirlines().subscribe(res => {
      this.airlines = res;
      console.log(this.airlines);
    }, err => {
      console.log(err);
    });
  }
  updateAiline(event) {
    console.log(event);
    this.service.updateAnAirline(event).subscribe(res=>{console.log(res)});
    this.router.navigateByUrl("/dashboard");
  }
  updateID(airline) {
    this.id = airline._id;
  }
}
