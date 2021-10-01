import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../shared/models/patient';
import { PatientService } from '../shared/services/patient.service';

@Component({
  selector: 'app-patient-liste',
  templateUrl: './patient-liste.component.html',
  styleUrls: ['./patient-liste.component.css']
})
export class PatientListeComponent implements OnInit {

  patients:Patient[]=[];

  constructor(private patientService:PatientService, private router:Router) { }

  ngOnInit(): void {
    this.patientService.getPatients().subscribe((patients:Patient[]) => {
      this.patients=patients;
    })
  }

  add(){
    this.router.navigate(["patients/add"]);
  }
  

}
