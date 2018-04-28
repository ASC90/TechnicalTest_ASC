import { Component, OnInit, EventEmitter, HostListener } from '@angular/core';
import { MaterializeAction } from "angular2-materialize"
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tapTargetActions: EventEmitter<MaterializeAction> = new EventEmitter<MaterializeAction>();
  isActive = false;
  constructor() { }

  ngOnInit() {
    if (!localStorage.getItem("firstVisit")) {
      localStorage.setItem("firstVisit", "true");
      setTimeout(() => {
        this.openTapTarget();
      }, 1000);
    }
  }
  activate () {
    this.isActive = !this.isActive;
  }
  @HostListener('window:beforeunload')
  canDeactivate(): void {
    alert("leaving");
    if (localStorage.getItem("firstVisit"))
    {
      localStorage.removeItem("firstVisit");
    }
  }
  openTapTarget() {
    this.tapTargetActions.emit({ action: "tapTarget", params: ["open"] });
    console.log('emmited');
  }
  closeTapTarget() {
    this.tapTargetActions.emit({ action: "tapTarget", params: ["close"] });
  }
}
