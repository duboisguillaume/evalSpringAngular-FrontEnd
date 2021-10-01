import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) {
  }

  public getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${environment.url}/patients`);
  }

  public getPatient(id:number): Observable<Patient> {
    return this.http.get<Patient>(`${environment.url}/patients/${id}`);
  }

  public addPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(`${environment.url}/patients`, patient);
  }

  public deletePatient(id:number): Observable<Patient> {
    console.log("ok")
    return this.http.delete<Patient>(`${environment.url}/patients/${id}`);
   
  }

  public updatePatient(patient:Patient):Observable<Patient>{
    return this.http.put<Patient>(`${environment.url}/patients`, patient);
  }
}
