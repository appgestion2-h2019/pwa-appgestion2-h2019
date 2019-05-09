import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Salle } from '../../salle';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalleService {
  /**
   * TODO: Gérer l'url en fonction des paramètres de recherche
   */
  sallesUrl = "http://localhost:3000/salles/";
  
  constructor(private http: HttpClient) { }

  /**
   * Obtient toutes les salles à partir du service 
   * pour les salles. 
   * Les filtres et les restrictions sont gérés avec
   * la [sallesUrl]. Voir documentation de l'API
   * pour l'exemple
   * @author Étienne bouchard
   */
  obtenirSalles() : Observable<Salle[]> {
    return this.http.get<Salle[]>(this.sallesUrl);  
  }

}
