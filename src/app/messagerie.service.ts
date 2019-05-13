import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MessagerieComponent} from './messagerie/messagerie.component';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagerieService {
  apiUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }
  getSalle(salleId): Observable<object> {
    return this.http.get(this.apiUrl + 'salles/' + salleId);
  }

  getUser(userId): Observable<object> {
    // Vérifier avec la team des users les calls sur l'api
    return this.http.get(this.apiUrl + 'utilisateurs');
  }
}
