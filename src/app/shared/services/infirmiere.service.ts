import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Infirmiere } from '../models/infirmiere';

@Injectable({
  providedIn: 'root'
})
export class InfirmiereService {

  constructor(private http: HttpClient) {
  }

  public getInfirmieres(): Observable<Infirmiere[]> {
    return this.http.get<Infirmiere[]>(`${environment.url}/infirmieres`);
  }

  public addInfirmiere(infirmiere: Infirmiere): Observable <Infirmiere> {
    return this.http.post<Infirmiere>(`${environment.url}/infirmieres`, infirmiere);
  }

  public deleteInfirmiere(id:number) {
    this.http.delete(`${environment.url}/infirmieres/${id}`);
  }

  public updateInfirmiere(infirmiere: Infirmiere):Observable <Infirmiere>{
    return this.http.put<Infirmiere>(`${environment.url}/infirmieres`, infirmiere);
  }
}
