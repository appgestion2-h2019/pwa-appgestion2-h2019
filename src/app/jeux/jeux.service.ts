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

  getCategories() : Observable<Categorie[]> {
  return this.http.get<Categorie[]>(this.jeuxUrl);
}

getScore() : Observable<Score[]> {
  return this.http.get<Score[]>(this.jeuxUrl);
}
  //
  // getScore(id: number): Observable<Score[]> {
  // return this.http.get<Score[]>(this.jeuxUrl + '/' + id);
  // }

}
