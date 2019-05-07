import { Component, OnInit } from '@angular/core';
import { Salle } from '../salle';
import { SalleService } from './salle/salle.service';

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

  // salles = [
  //   { _id: "1", nom: "Première salle", langue: "Français", type: { nom: "défaut" } },
  //   { _id: "2", nom: "Deuxième salle", langue: "Français", type: { nom: "défaut" } },
  //   { _id: "3", nom: "Troisième salle", langue: "Français", type: { nom: "défaut" } },
  //   { _id: "4", nom: "Quatrième salle", langue: "Français", type: { nom: "défaut" } },
  // ];

  constructor(private salleService: SalleService) { }

  obtenirSalles() : void {
    this.salleService.obtenirSalles().subscribe(salles => this.salles = salles);
  }

  ngOnInit() {
    this.obtenirSalles();
  }

}
