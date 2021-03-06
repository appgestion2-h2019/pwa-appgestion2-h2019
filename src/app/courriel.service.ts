import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Usager} from "./authentification/usager";
import { Observable} from "rxjs";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CourrielService {
  usagerUrl = 'http://localhost:3000/utilisateurs/';

  constructor(private http: HttpClient) { }

  // Vas chercher les usagés
    //todo allez cherchez pas courriel
  connexionUsager(usager : Usager): Observable<Usager[]> {
    return this.http.post<Usager[]>(this.usagerUrl + 'connexion/', usager, httpOptions);
  }

  // Ajoute un usager qui a été créer manuellement
  addUsagerCourriel(usager : Usager): Observable<Usager> {
      return this.http.post<Usager>(this.usagerUrl , usager, httpOptions);
  }
}
