import { Component, OnInit, Inject } from '@angular/core';
import { Salle } from 'src/app/salle';
import { SallesComponent } from '../salles.component';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-popup-creation',
  templateUrl: './popup-creation.component.html',
  styleUrls: ['./popup-creation.component.css']
})
export class PopupCreationComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  instanceof_salles : SallesComponent;

  listeUtilisateurs : any = [];


  // Variables d'initialisation des paramètres
  typeDeSalle = "défaut";
  utiliseListeBlanche = false;
  langue = "français";
  nomSalle = "";
  descriptionSalle = "";

  nouvelleSalle : Salle;

  instanceof_creation = this;

  ngOnInit() {
    // Obtention du data depuis le MAT_DIALOG_DATA. 
    // Le constructeur déclare la variable [data] depuis la constante
    this.instanceof_salles = this.data.instanceof_salles;
    this.nouvelleSalle = new Salle();
    this.nouvelleSalle.nom = "";
  }

  /**
   * Création d'une salle à partir des données
   * récoltées dans le formulaire de création
   * @author Étienne Bouchard
   */
  creerSalle() : void {
    console.log(this.instanceof_salles.sallesUrl);

    if (this.nomSalle != "") {
      this.nouvelleSalle.nom = this.nomSalle;
      this.nouvelleSalle.langue = this.langue;
      this.nouvelleSalle.proprietaire = this.instanceof_salles.utilisateurActif;
      this.nouvelleSalle.description = this.descriptionSalle;
      this.instanceof_salles.creerSalles(this.nouvelleSalle);
    }
  }

}
