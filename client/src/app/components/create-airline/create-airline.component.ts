import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from '../../services/crud-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-airline',
  templateUrl: './create-airline.component.html',
  styleUrls: ['./create-airline.component.css']
})
export class CreateAirlineComponent implements OnInit {

  constructor(private service: CrudServiceService, private router: Router) { }

  ngOnInit() {
  }
  airlineCreation(event: any) {
    console.log(event);
    this.service.createAirline(event).subscribe(res => {console.log(res); this.router.navigateByUrl("/dashboard");}, err => {console.log(err)});
  }
}
