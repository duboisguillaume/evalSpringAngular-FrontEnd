import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/shared/services/patient.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  patientForm:FormGroup;

  constructor(private patientService:PatientService, private router:Router) { 
    
    this.patientForm = new FormGroup({
      id: new FormControl(''),
      nom: new FormControl('', Validators.required),
      prenom: new FormControl('', Validators.required),
      numeroSecuriteSociale: new FormControl('', Validators.required),
      sexe: new FormControl('', Validators.required),
      dateDeNaissance: new FormControl('', Validators.required),
      adresse: new FormGroup({
        numero: new FormControl(''),
        rue: new FormControl(''),
        cp: new FormControl(''),
        ville: new FormControl('')
      })
    });
    
  }

  submit(){
    this.patientService.addPatient(this.patientForm.value).subscribe();
    //this.router.navigate(["patients"]);
  }

  ngOnInit(): void {
  }

}
