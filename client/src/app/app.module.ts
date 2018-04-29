import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CrudServiceService } from './services/crud-service.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateAirlineComponent } from './components/create-airline/create-airline.component';
import { FormComponent } from './components/form/form.component';
import { ReadAirlinesComponent } from './components/read-airlines/read-airlines.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'create-airline', component: CreateAirlineComponent },
  { path: 'read-airline', component: ReadAirlinesComponent },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    CreateAirlineComponent,
    FormComponent,
    ReadAirlinesComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CrudServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
