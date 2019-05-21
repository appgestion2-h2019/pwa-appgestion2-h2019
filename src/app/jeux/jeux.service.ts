import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Categorie } from '../categorie';
import { Score } from '../score';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class JeuxService {

  jeuxUrl = 'http://localhost:3000/jeux';

  constructor(private http: HttpClient) { }

  // Ajout de catégories
  addCategorie(categorie: Categorie): Observable<Categorie> {
    return this.http.post<Categorie>(this.jeuxUrl + '/', categorie, httpOptions);
  }

  // Affichage des catégories
  getCategories(): Observable<Categorie[]> {
  return this.http.get<Categorie[]>(this.jeuxUrl);
  }

  // Ajouter un score
  addScore(score: Score): Observable<Score> {
        return this.http.post<Score>(this.jeuxUrl + '/score', score, httpOptions);
  }

  // Affichage de tous les scores.
  getScore(): Observable<Score[]> {
  return this.http.get<Score[]>(this.jeuxUrl);
  }

  // Ajouter un mot
  addMot(mot: Categorie): Observable<Categorie> {
    return this.http.post<Categorie>(this.jeuxUrl + '/mot', mot, httpOptions);
  }
  deleteCategorie(categorie: Categorie | number): Observable<Categorie> {
    const id = typeof categorie === 'number' ? categorie : categorie.id;
    const url = `${this.jeuxUrl}/${id}`;   // ajouter l'id à l'URL de base

    return this.http.delete<Categorie>(url, httpOptions);
  }

}
