import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/shared/models/patient';
import { PatientService } from 'src/app/shared/services/patient.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  patient!:Patient;
  patientForm:FormGroup;

  constructor(private patientService:PatientService, private route:ActivatedRoute, private router:Router) { 
    
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
      }),
      infirmiere: new FormGroup({
        id:new FormControl(''),
        nom:new FormControl('')
      })
    });
    
  }

  ngOnInit(): void {
    this.patientService.getPatient(this.route.snapshot.params['id']).subscribe((patient)=>{
      this.patient=patient;
      console.log(this.patient);
      console.log(this.patient.id);
    });
    
  }

  submit(){
    console.log(this.patientForm.value)
    this.patientService.updatePatient(this.patientForm.value).subscribe((patient)=>{
      this.patient=this.patient;
    });
  }

  delete(){
    this.patientService.deletePatient(this.patient.id).subscribe();
    this.router.navigate(["patients"]);
  }

}
