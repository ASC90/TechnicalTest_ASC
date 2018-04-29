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
import { UpdateAirlinesComponent } from './components/update-airlines/update-airlines.component';
import { DeleteAirlinesComponent } from './components/delete-airlines/delete-airlines.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'create-airline', component: CreateAirlineComponent },
  { path: 'read-airline', component: ReadAirlinesComponent },
  { path: 'update-airlines', component: UpdateAirlinesComponent },
  { path: 'delete-airlines', component: DeleteAirlinesComponent },
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
    ReadAirlinesComponent,
    UpdateAirlinesComponent,
    DeleteAirlinesComponent
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
