import { Component, OnInit } from '@angular/core';
import { Salle } from '../salle';
import { SalleService } from './salle/salle.service';
import { ListeBlancheComponent } from '../liste-blanche/liste-blanche.component';

@Component({
  selector: 'app-salles',
  templateUrl: './salles.component.html',
  styleUrls: ['./salles.component.css']
})
export class SallesComponent implements OnInit {
  /**
   * TODO: Gérer l'url en fonction des paramètres de recherche
   */
  sallesUrl = "http://localhost:3000/salles/";
  salles : Salle[];
  listeUtilisateurs : any = [];
  salle_instance = this;
  interval: any;

  constructor(private salleService: SalleService) { }

  /**
   * Obtient les salles à partir du [salleService]
   * @author Étienne Bouchard
   */
  obtenirSalles() : void {
    this.salleService.obtenirSalles().subscribe(salles => this.salles = salles);
  }

  /**
   * Création d'une salle à partir d'un service
   * @param salle Salle à créer
   */
  creerSalles(salle: Salle) : void {
    this.salleService.creerSalle(salle).subscribe();
  }

  ngOnInit() {
    this.obtenirSalles();

    // Crée un Timer à chaque 2 secs d'obtenir les salles
    this.interval = setInterval(() => { 
      try{
        this.obtenirSalles(); 
        console.log(this.listeUtilisateurs.length);
      } catch {
        console.log("Une erreur de connexion à la base de données est survenue.");
      }
    }, 2000);
  }

}
