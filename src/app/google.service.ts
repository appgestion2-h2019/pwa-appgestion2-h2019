import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usager } from './authentification/usager';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class GoogleService {
    UsagersUrl = 'http://localhost:3000/utilisateurs/';

    constructor(private http: HttpClient) { }

    getUsager(): Observable<Usager[]> {
        return this.http.get<Usager[]>(this.UsagersUrl);
    }
    addUsager(usager: Usager): Observable<Usager> {
        return this.http.post<Usager>(this.UsagersUrl + 'usagergoogle/', usager, httpOptions);
    }

}
