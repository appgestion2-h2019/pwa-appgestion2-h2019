import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MessagerieComponent} from './messagerie/messagerie.component';
import {Observable} from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MessagerieService {
  apiUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }
  getSalle(salleId): Observable<any> {
    return this.http.get(this.apiUrl + 'salles/unique/' + salleId);
  }

  getUser(userId): Observable<any> {
    // Vérifier avec la team des users les calls sur l'api
    return this.http.get(this.apiUrl + 'utilisateurs');
  }

  initialiseMessages(id): Observable<any> {
    const body = {salleId: id};
    return this.http.post(this.apiUrl + 'salles/initialisationMessage/', body, httpOptions);
  }
  envoyerMessage(messageObjet): Observable<any> {
    return this.http.post(this.apiUrl + 'salles/ajouterMessage/', messageObjet, httpOptions);
  }
}
