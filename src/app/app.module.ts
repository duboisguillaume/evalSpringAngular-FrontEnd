import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from  "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientListeComponent } from './patient-liste/patient-liste.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InfirmiereListeComponent } from './infirmiere-liste/infirmiere-liste.component';
import { PatientComponent } from './patient-liste/patient/patient.component';
import { PatientDetailsComponent } from './patient-liste/patient-details/patient-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PatientListeComponent,
    NavbarComponent,
    InfirmiereListeComponent,
    PatientComponent,
    PatientDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
