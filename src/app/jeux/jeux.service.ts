import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Categorie } from '../categorie';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class JeuxService {

  categorieUrl = 'http://localhost:3000/jeux';

  constructor(private http: HttpClient) { }

  getCategories() : Observable<Categorie[]> {
  return this.http.get<Categorie[]>(this.categorieUrl);
}

}
