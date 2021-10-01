import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Deplacement } from '../models/deplacement';

@Injectable({
  providedIn: 'root'
})
export class DeplacementService {

  constructor(private http: HttpClient) {
  }

  public getDeplacements(): Observable<Deplacement[]> {
    return this.http.get<Deplacement[]>(`${environment.url}/infirmieres`);
  }

  public getDeplacementsByInfirmiereId(id:number): Observable<Deplacement[]> {
    return this.http.get<Deplacement[]>(`${environment.url}/infirmieres/${id}`);
  }

  public getDeplacementsByPatientId(id:number): Observable<Deplacement[]> {
    return this.http.get<Deplacement[]>(`${environment.url}/patients/${id}`);
  }

  public addInfirmiere(infirmiere: Deplacement): Observable <Deplacement> {
    return this.http.post<Deplacement>(`${environment.url}/infirmieres`, infirmiere);
  }

  public deleteInfirmiere(id:number) {
    this.http.delete(`${environment.url}/infirmieres/${id}`);
  }
}
