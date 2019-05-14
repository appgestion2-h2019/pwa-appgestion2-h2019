import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usager } from './usager';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsagerService {
  apiUrl = 'http://localhost:3000/utilisateurs/';
  constructor(private http: HttpClient) { }
  getUsager(usagerId): Observable<Usager> {
    return this.http.get<Usager>(this.apiUrl + usagerId);
  }
}
