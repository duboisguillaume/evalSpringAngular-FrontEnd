import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/shared/models/patient';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  @Input()
  patient!:Patient;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  details(){
    this.router.navigate(["patients/"+this.patient.id]);
  }

}
