import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usager } from './authentification/usager';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GoogleService {
    UsagersUrl = 'http://localhost:3000/utilisateurs/';

    constructor(private http: HttpClient) { }

    getUsager(): Observable<Usager[]> {
        return this.http.get<Usager[]>(this.UsagersUrl);
    }
}
